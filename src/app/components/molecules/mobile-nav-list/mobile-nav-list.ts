import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-nav-list',
  imports: [CommonModule],
  templateUrl: './mobile-nav-list.html',
  styleUrl: './mobile-nav-list.css'
})
export class MobileNavList {
  @Input() navLinks: { href: string; text: string }[] = [];

}
