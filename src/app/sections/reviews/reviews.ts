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

  @ViewChild('reviewModal') reviewModal!: ReviewSubmitPopup;
  
  reviews: any[] = [];
  groupedReviews: any[][] = [];
  currentSlide = 0;
  slideInterval: any;

  //Google Web App URL eka methanata danna
  //Deployment ID - AKfycbzXzm61isx31uCk7_DIMFTdNisfPgOGXICq8ce-ldF1I4CmZB3cNJmIDWz9bNM0YzMOiA
  private scriptUrl = 'https://script.google.com/macros/s/AKfycbzXzm61isx31uCk7_DIMFTdNisfPgOGXICq8ce-ldF1I4CmZB3cNJmIDWz9bNM0YzMOiA/exec'; 

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchReviews();
    this.startAutoSlide();
  }

  fetchReviews() {
    this.http.get<any[]>(this.scriptUrl).subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {
          this.reviews = [...data];
          console.log('Data received:', this.reviews);
          this.groupReviews();
          this.cdr.detectChanges(); 
        }
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }

  openPopup() {
    this.reviewModal.showDialog();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); //slide change after 5s
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  groupReviews() {
    const groupSize = 3;
    this.groupedReviews = [];
    for (let i = 0; i < this.reviews.length; i += groupSize) {
      this.groupedReviews.push(this.reviews.slice(i, i + groupSize));
    }
  }

  nextSlide() {
    if (this.groupedReviews.length > 0) {
      this.currentSlide = (this.currentSlide + 1) % this.groupedReviews.length;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

}