import { Component, Input } from '@angular/core';

import { Heading } from '../../atoms/heading/heading';
import { Text } from '../../atoms/text/text'

@Component({
  selector: 'app-herobanner',
  imports: [Heading, Text],
  templateUrl: './herobanner.html',
  styleUrl: './herobanner.css',
  standalone: true,
})
export class Herobanner {
  @Input() title: string = '';
  @Input() description: string = '';
}

