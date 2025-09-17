import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Button } from "../../atoms/button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-nav',
  imports: [Button, CommonModule],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.css',
  standalone: true,
})
export class MobileNav {
  @Input() navLinks: { href: string; text: string }[] = [];
  @Output() loginClick = new EventEmitter<void>();

  onLoginClick(): void {
    this.loginClick.emit();
  }
}
