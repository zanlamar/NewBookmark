import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})

export class Button {
  @Input() variant: 'blue' | 'light' | 'red' = 'blue';
  @Input() href?: string;
  @Input() text: string = '';
  @Input() additionalClasses?: string = '';
}