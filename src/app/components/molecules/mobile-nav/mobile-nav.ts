import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Logo } from '../../atoms/logo/logo'; 
import { Button } from "../../atoms/button/button";
import { CommonModule } from '@angular/common';

export interface NavLink {
 href: string;
 text: string;
}

export interface SocialLink {
  platform: string;
  iconSrc: string;
  altText: string;
}


@Component({
  selector: 'app-mobile-nav',
  imports: [Button, CommonModule, Logo],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.css',
  standalone: true,
})

export class MobileNav {
  @Input() isOpen: boolean = false;
  @Input() mobileLogo: string = 'assets/logos/logo-bookmark-white.svg';
  @Input() logoAlt: string = 'Logo Bookmark';
  @Input() navLinks: NavLink[] = [];
  @Input() socialLinks: SocialLink[] = [];

  @Output() loginClick = new EventEmitter<void>();
  @Output() closeClick = new EventEmitter<void>();
  @Output() socialClick = new EventEmitter<string>();

  onLoginClick(): void {
    this.loginClick.emit();
  }

  onCloseClick(): void {
    this.closeClick.emit();
  }

  onSocialClick(platform: string): void {
    this.socialClick.emit(platform);
  }
}



