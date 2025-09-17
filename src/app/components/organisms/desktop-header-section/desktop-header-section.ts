import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Logo } from "../../atoms/logo/logo";
import { DesktopNav, NavLink } from "../../molecules/desktop-nav/desktop-nav";
import { Button } from "../../atoms/button/button";


@Component({
  selector: 'app-desktop-header-section',
  imports: [Logo, DesktopNav, Button],
  templateUrl: './desktop-header-section.html',
  styleUrl: './desktop-header-section.css',
  standalone: true,
})

export class DesktopHeaderSection {
  logoSrc = 'assets/logos/logo-bookmark.svg';
  logoAlt = 'Logo Bookmark';

  navLinks: NavLink[] = [
    { text: 'Features', href: '#features' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'Contact', href: '#contact' }
  ];

  @Output() loginClick = new EventEmitter<void>();
  @Output() hamburgerClick = new EventEmitter<void>();

  // onLoginClick(): void {
  //   this.loginClick.emit();
  // }

  onHamburgerClick(): void { 
    this.hamburgerClick.emit();
  };

  
}
