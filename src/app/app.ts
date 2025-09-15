import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { Herobanner } from './components/molecules/herobanner/herobanner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Herobanner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
