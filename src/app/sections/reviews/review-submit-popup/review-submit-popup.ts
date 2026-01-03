import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-review-submit-popup',
  imports: [
    CommonModule,
    DialogModule,
    InputTextModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './review-submit-popup.html',
  styleUrl: './review-submit-popup.css',
})
export class ReviewSubmitPopup {

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  visible: boolean = false;

  reviewData = {
    name: '',
    location: '',
    rating: '5',
    review: ''
  };

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    // නම හෝ රිවිව් එක හිස් නම් ඉදිරියට නොයන්න
    if (!this.reviewData.name.trim() || !this.reviewData.review.trim()) {
        return;
    }
    this.submitToSheet();
  }

  submitToSheet() {
    //Deployment ID - AKfycbz-wYc-p8aYChY7EvC39ORGGTKhdYM4RctBKqdassZ16kHOAbeKmK9fGrP_rlYCA_Muew
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz-wYc-p8aYChY7EvC39ORGGTKhdYM4RctBKqdassZ16kHOAbeKmK9fGrP_rlYCA_Muew/exec';
    
    // Header එකක් අවශ්‍ය නැත, content-type එක plain text ලෙස යැවීමෙන් 
    // බොහෝ විට CORS ගැටළු මගහැරේ
    this.http.post(scriptURL, JSON.stringify(this.reviewData), {
      responseType: 'text' 
    }).subscribe({
      next: (res) => {
        console.log('Success!', res);
        this.visible = false;
        this.cd.detectChanges();
        alert('Review added successfully!');
      },
      error: (err) => {
        // මෙහිදී status 0 ආවත් සමහරවිට sheet එක update වී තිබිය හැක
        console.error('Submission Error:', err);
        // Status 0 යනු response එක block වීමක් මිස data නොයෑමම නොවේ
        if (err.status === 0) {
          alert('Review submitted! (Note: Redirect handled by browser)');
          this.visible = false;
        }
      }
    });
  }

}
