import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
  standalone: true
})
export class Logo {
  @Input() src: string = "";
  @Input() alt: string = ""
  @Input() logoClass: string = ""
}
