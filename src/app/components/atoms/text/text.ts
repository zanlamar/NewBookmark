import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.html',
  styleUrl: './text.css',
  standalone: true

})
export class Text {
  @Input() content: string = '';
}
