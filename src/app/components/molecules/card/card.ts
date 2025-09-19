import { Component, Input } from '@angular/core';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-card',
  imports: [Button],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() logo: string = '';
  @Input() browser: string = '';
  @Input() href: string = '';
  @Input() version: string = '#';

}
