import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featureimage',
  imports: [],
  templateUrl: './featureimage.html',
  styleUrl: './featureimage.css',
  standalone: true
})
export class Featureimage {
  @Input() src: string = '';
  @Input() alt: string = '';
}
