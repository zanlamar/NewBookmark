import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from "../../atoms/button/button";
import { CommonModule } from '@angular/common';


export interface NavLink {
  href: string;
  text: string;
}

@Component({
  selector: 'app-desktop-nav',
  imports: [Button, CommonModule],
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

