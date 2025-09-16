import { Component, Input } from '@angular/core';
import { Image } from '../../atoms/image/image';

@Component({
  selector: 'app-hero-image',
  imports: [Image],
  templateUrl: './hero-image.html',
  styleUrl: './hero-image.css',
  standalone: true
})
export class HeroImage {
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
}
