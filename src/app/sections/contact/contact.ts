import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  sendWhatsApp(event: Event) {
    event.preventDefault(); // පිටුව refresh වීම නතර කරයි
    
    const phoneNumber = "94770566418"; // ඔබේ WhatsApp අංකය මෙතනට දාන්න
    
    // පණිවිඩය සකස් කිරීම
    const message = `*New Inquiry - Kandy Sacred Tours*%0A%0A` + 
                    `*Name:* ${this.formData.name}%0A` +
                    `*Interested Tour:* ${this.formData.tour}%0A` +
                    `*Message:* ${this.formData.message}`;

    // WhatsApp window එක open කිරීම
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}