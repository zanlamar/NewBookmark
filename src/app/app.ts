import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { Herobanner } from './components/molecules/herobanner/herobanner';
import { FeaturesSection } from "./components/organisms/features-section/features-section";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Herobanner, FeaturesSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
