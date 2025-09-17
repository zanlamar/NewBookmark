import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from "../../atoms/button/button";

export interface NavLink {
  href: string;
  text: string;
}

@Component({
  selector: 'app-desktop-nav',
  imports: [Button],
  templateUrl: './desktop-nav.html',
  styleUrl: './desktop-nav.css'
})

export class DesktopNavMoleculeComponent {
  @Input() navLinks: NavLink[] = [];
  @Output() loginClick = new EventEmitter<void>();

  onLoginClick(): void {
    this.loginClick.emit();
  }
}

