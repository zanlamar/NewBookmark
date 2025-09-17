import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  standalone: true,
})

export class Button {
  @Input() variant: 'blue' | 'light' | 'red' | 'hamburger' | 'close' | 'mobile-login' = 'red';
  @Input() href?: string;
  @Input() text: string = '';
  @Input() additionalClasses?: string = '';
}