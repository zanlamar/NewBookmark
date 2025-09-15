import { Component, Input } from '@angular/core';

import { Heading } from '../../atoms/heading/heading';
import { Text } from '../../atoms/text/text'
import { Image } from '../../atoms/image/image'
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-herobanner',
  imports: [Heading, Text, Image, Button],
  templateUrl: './herobanner.html',
  styleUrl: './herobanner.css',
  standalone: true,
})
export class Herobanner {
  @Input() title: string = 'A Simple Bookmark Manager';
  @Input() description: string = 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.';
}

