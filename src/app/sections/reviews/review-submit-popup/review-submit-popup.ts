import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-review-submit-popup',
  imports: [
    CommonModule,
    DialogModule,
    InputTextModule,
    InputTextModule
  ],
  templateUrl: './review-submit-popup.html',
  styleUrl: './review-submit-popup.css',
})
export class ReviewSubmitPopup {

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

}
