import { Component, Input } from '@angular/core';
import { Heading } from '../../atoms/heading/heading';
import { Subtitle } from '../../atoms/subtitle/subtitle';

@Component({
  selector: 'app-featuresbanner',
  imports: [Heading, Subtitle],
  templateUrl: './featuresbanner.html',
  styleUrl: './featuresbanner.css',
  standalone: true
})
export class Featuresbanner {
  @Input() title: string = 'Features';
  @Input() subtitle: string = 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.';
  @Input() text: string = '';

}
