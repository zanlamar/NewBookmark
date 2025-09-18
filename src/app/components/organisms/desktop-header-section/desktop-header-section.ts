import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Logo } from "../../atoms/logo/logo";
import { Button } from "../../atoms/button/button";
import { DesktopNav, NavLink } from "../../molecules/desktop-nav/desktop-nav";
import { MobileNav } from "../../molecules/mobile-nav/mobile-nav";


@Component({
  selector: 'app-desktop-header-section',
  imports: [Logo, DesktopNav, Button, MobileNav],
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

  // socialLinks: SocialLink[] = [
  //   {
  //     platform: 'facebook',
  //     iconSrc: 'assets/images/icon-facebook.svg',
  //     altText: 'Facebook'
  //   },
  //   {
  //     platform: 'twitter',
  //     iconSrc: 'assets/images/icon-twitter.svg',
  //     altText: 'Twitter'
  //   }
  // ];

  isMobileNavOpen: boolean = false;

  @Output() loginClick = new EventEmitter<void>();
  @Output() hamburgerClick = new EventEmitter<void>();

  onLoginClick(): void {
    this.loginClick.emit();
  }

  onHamburgerClick(): void { 
    this.isMobileNavOpen = true;
    this.hamburgerClick.emit();
  };

  onMobileMenuClose(): void {
    this.isMobileNavOpen = false;
  }
  
}
