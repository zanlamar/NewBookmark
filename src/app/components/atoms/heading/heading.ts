import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.css',
  standalone: true

})
export class Heading {
  @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
  @Input() text: string = '';

}