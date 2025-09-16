import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  imports: [],
  templateUrl: './subtitle.html',
  styleUrl: './subtitle.css',
  standalone: true,
})
export class Subtitle {
  @Input() text: string = '';

}
