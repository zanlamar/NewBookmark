import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-socialicon',
  imports: [],
  templateUrl: './socialicon.html',
  styleUrl: './socialicon.css',
  standalone: true
})
export class Socialicon { 
  @Input() iconSrc: string = 'assets/icons/icon-hamburger.svg';
  @Input() altText: string = 'Menu Icon';
  @Output() onClick = new EventEmitter<void>();

}
