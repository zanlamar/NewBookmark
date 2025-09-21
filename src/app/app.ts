import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { FeaturesSection } from "./components/organisms/features-section/features-section";
import { HerobannerSection } from './components/organisms/herobanner-section/herobanner-section';
import { DesktopHeaderSection } from "./components/organisms/desktop-header-section/desktop-header-section";
import { ExtensionsSection } from "./components/organisms/extensions-section/extensions-section";
import { FooterSection } from './components/organisms/footer-section/footer-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeaturesSection, HerobannerSection, DesktopHeaderSection, ExtensionsSection, FooterSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
