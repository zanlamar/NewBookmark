import { Component, Input } from '@angular/core';
import { Heading } from '../../atoms/heading/heading';
import { Subtitle } from '../../atoms/subtitle/subtitle';

@Component({
  selector: 'app-features-header',
  imports: [Heading, Subtitle],
  templateUrl: './features-header.html',
  styleUrl: './features-header.css',
  standalone: true
})
export class FeaturesHeader {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
