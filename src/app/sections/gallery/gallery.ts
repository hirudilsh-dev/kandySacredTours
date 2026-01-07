import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

@Input() isExpanded: boolean = false; // Main page eken thama meka control wenne
  
  allImages: string[] = [];
  selectedImage: string | null = null;

  ngOnInit() {
    // Assets/gallery folder eke img-1.jpg idan img-100.jpg wenakan thiyenna oni
    const totalImages = 100; 
    for (let i = 1; i <= totalImages; i++) {
      this.allImages.push(`/gallery/img-${i}.jpeg`);
    }
  }

  // Getter function ekak use karala preview images select karagamu
  get displayImages() {
    // expanded nathnam images 6i, expanded nam okkoma 100ma
    return this.isExpanded ? this.allImages : this.allImages.slice(0, 6);
  }

  openLightbox(url: string) {
    this.selectedImage = url;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }

}
