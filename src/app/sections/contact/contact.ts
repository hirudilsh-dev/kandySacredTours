import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  // Form එකේ දත්ත තබා ගන්නා තැන
  formData = {
    name: '',
    tour: 'Temple of the Tooth Tour',
    message: ''
  };

  sendWhatsApp(form: NgForm) {
    // 1. Check if the form is valid
    if (form.invalid) {
      alert("Please fill in all required fields.");
      return;
    }

    // 2. Extra check for empty spaces in the name
    if (!this.formData.name.trim()) {
      alert("Please enter a valid name.");
      return;
    }

    const phoneNumber = "94770566418";
    
    // Encoding the message safely
    const message = `*New Inquiry - Kandy Sacred Tours*%0A%0A` + 
                    `*Name:* ${encodeURIComponent(this.formData.name)}%0A` +
                    `*Interested Tour:* ${encodeURIComponent(this.formData.tour)}%0A` +
                    `*Message:* ${encodeURIComponent(this.formData.message || 'No additional message')}`;

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}