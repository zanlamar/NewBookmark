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
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
