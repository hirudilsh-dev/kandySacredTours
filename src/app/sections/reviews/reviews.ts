import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule], // ngFor wada karanna meka aniwaren oni
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews implements OnInit {
  reviews: any[] = [];

  //Google Web App URL eka methanata danna
  //Deployment ID - AKfycbzXzm61isx31uCk7_DIMFTdNisfPgOGXICq8ce-ldF1I4CmZB3cNJmIDWz9bNM0YzMOiA
  private scriptUrl = 'https://script.google.com/macros/s/AKfycbzXzm61isx31uCk7_DIMFTdNisfPgOGXICq8ce-ldF1I4CmZB3cNJmIDWz9bNM0YzMOiA/exec'; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchReviews();
  }

  fetchReviews() {
    this.http.get<any[]>(this.scriptUrl).subscribe({
      next: (data) => {
        this.reviews = data;
        console.log('Data received:', data);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}