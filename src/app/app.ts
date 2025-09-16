import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { FeaturesSection } from "./components/organisms/features-section/features-section";
import { HerobannerSection } from './components/organisms/herobanner-section/herobanner-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeaturesSection, HerobannerSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
