import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
  standalone: true
})
export class Logo {
  @Input() src: string = "assets/images/logo.png";
  @Input() alt: string = "Bookmark Logo";
}
