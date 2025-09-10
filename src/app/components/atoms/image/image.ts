import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.html',
  styleUrl: './image.css',
  standalone: true

})
export class Image {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() cssClass: string = '';
}
