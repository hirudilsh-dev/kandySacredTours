import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReviewSubmitPopup } from "./review-submit-popup/review-submit-popup";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    CommonModule,
    ReviewSubmitPopup
  ],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews implements OnInit {

  // Child component එකට reference එකක් මෙතනින් ගන්නවා
  @ViewChild('reviewModal') reviewModal!: ReviewSubmitPopup;
  
  reviews: any[] = [];

  //Google Web App URL eka methanata danna
  //Deployment ID - AKfycbzXzm61isx31uCk7_DIMFTdNisfPgOGXICq8ce-ldF1I4CmZB3cNJmIDWz9bNM0YzMOiA
  private scriptUrl = 'https://script.google.com/macros/s/AKfycbzXzm61isx31uCk7_DIMFTdNisfPgOGXICq8ce-ldF1I4CmZB3cNJmIDWz9bNM0YzMOiA/exec'; 

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchReviews();
  }

  // Button එක click කළාම වැඩ කරන function එක
  openPopup() {
    this.reviewModal.showDialog();
  }

  fetchReviews() {
    this.http.get<any[]>(this.scriptUrl).subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {
          this.reviews = [...data]; // Spread operator එක අනිවාර්යයි
          console.log('Data received:', this.reviews);
          
          // මෙන්න මේ පේළිය එකතු කරන්න. 
          // එවිට දත්ත ලැබුණු පසු Angular එක UI එක refresh කරනවා.
          this.cdr.detectChanges(); 
        }
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}