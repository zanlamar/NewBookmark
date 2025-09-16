import { Component, Input } from '@angular/core';
import { Button } from '../../atoms/button/button';

interface ButtonData {
  text: string;
  href: string;
  variant: 'blue' | 'light' | 'red';
  additionalClasses?: string;
}

@Component({
  selector: 'app-buttons-div',
  imports: [Button],
  templateUrl: './buttons-div.html',
  styleUrl: './buttons-div.css',
  standalone: true
})

export class ButtonsDiv {
  @Input() buttons: ButtonData[] = [];
}


