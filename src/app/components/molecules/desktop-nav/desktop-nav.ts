import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from "../../atoms/button/button";


export interface NavLink {
  href: string;
  text: string;
}

@Component({
  selector: 'app-desktop-nav',
  imports: [CommonModule, Button],
  templateUrl: './desktop-nav.html',
  styleUrl: './desktop-nav.css',
  standalone: true,
})

export class DesktopNav {
  @Input() navLinks: NavLink[] = [];
  @Output() loginClick = new EventEmitter<void>();

  onLoginClick(): void {
    this.loginClick.emit();
  }
}

