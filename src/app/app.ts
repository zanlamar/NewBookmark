import { Component, signal } from '@angular/core';

import { FeaturesSection } from "./components/organisms/features-section/features-section";
import { ExtensionsSection } from "./components/organisms/extensions-section/extensions-section";
import { FooterSection } from './components/organisms/footer-section/footer-section';
import { FirstSection } from "./components/organisms/first-section/first-section";
import { DesktopHeaderSection } from "./components/organisms/desktop-header-section/desktop-header-section";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeaturesSection, ExtensionsSection, FooterSection, FirstSection, DesktopHeaderSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
