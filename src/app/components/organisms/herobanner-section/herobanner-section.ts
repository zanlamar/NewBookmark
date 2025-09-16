import { Component, Input} from '@angular/core';
import { Herobanner } from '../../molecules/herobanner/herobanner';
import { HeroImage } from '../../molecules/hero-image/hero-image';
import { ButtonsDiv } from '../../molecules/buttons-div/buttons-div';

@Component({
  selector: 'app-herobanner-section',
  imports: [Herobanner, HeroImage, ButtonsDiv],
  templateUrl: './herobanner-section.html',
  styleUrl: './herobanner-section.css',
  standalone: true
})

export class HerobannerSection {
  @Input() title: string = 'A Simple Bookmark Manager';
  @Input() description: string = 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free'
  @Input() imageSrc: string = 'assets/images/illustration-hero.svg';
  @Input() imageAlt: string = 'Illustration Hero';
  
  buttons = [
    {
      text: 'Get it on Chrome',
      href: '#',
      variant: 'blue' as const,
      additionalClasses: 'btn-download'
    },
    {
      text: 'Get it on Firefox', 
      href: '#',
      variant: 'light' as const
    }
  ];
}
