import { Component, Input } from '@angular/core';
import { Featureimage } from '../../atoms/featureimage/featureimage';
import { Heading } from '../../atoms/heading/heading';
import { Button } from '../../atoms/button/button';
import { Text } from '../../atoms/text/text';

@Component({
  selector: 'app-features-content',
  imports: [Featureimage, Heading, Text, Button,],
  templateUrl: './features-content.html',
  styleUrl: './features-content.css',
  standalone: true
})
export class FeaturesContent {
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = 'More Info';
  @Input() buttonHref: string = '#';
  @Input() showButton: boolean = true;
  @Input() subtitle: string = '';
}
