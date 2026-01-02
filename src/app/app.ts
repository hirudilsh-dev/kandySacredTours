import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./sections/hero/hero";
import { Specialty } from "./sections/specialty/specialty";
import { Tours } from "./sections/tours/tours";
import { Gallery } from "./sections/gallery/gallery";
import { Reviews } from "./sections/reviews/reviews";
import { ContactComponent } from "./sections/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Specialty, Tours, Gallery, Reviews, ContactComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kandy-sacred-tours');
}
