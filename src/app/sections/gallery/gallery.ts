import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  @Input() isExpanded: boolean = false; // Main page eken thama meka control wenne
  
  allImages: string[] = [
    '/gallery/img-1.jpeg',
    '/gallery/img-2.jpeg',
    '/gallery/img-3.jpeg',
    '/gallery/img-4.jpeg',
    '/gallery/img-5.jpeg',
    '/gallery/img-6.jpeg',
    '/gallery/img-7.jpeg',
    '/gallery/img-8.jpeg'
  ];

  selectedImage: string | null = null;

  ngOnInit() { }

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
