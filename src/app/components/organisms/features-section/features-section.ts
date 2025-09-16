import { Component, Input, OnInit } from '@angular/core';
import { TabNav } from '../../molecules/tabs-nav/tab-nav/tab-nav';
import { FeaturesContent } from '../../molecules/features-content/features-content';
import { Heading } from "../../atoms/heading/heading";
import { Subtitle } from '../../atoms/subtitle/subtitle';

interface FeatureTabData {
  id: string;
  tabText: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
}

@Component({
  selector: 'app-features-section',
  imports: [TabNav, FeaturesContent, Heading, Subtitle],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css',
  standalone: true

  
})
export class FeaturesSection {
  @Input() sectionTitle: string = 'Features';
  @Input() subtitle: string = 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.';  
  activeTabId: string = 'bookmarking';
  
  featuresData: FeatureTabData[] = [
    {
      id: 'bookmarking',
      tabText: 'Simple Bookmarking',
      title: 'Bookmark in one click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete',
      imageSrc: './Recursos/Imagenes/illustration-features-tab-1.svg',
      imageAlt: 'Bookmarking feature',
      buttonText: 'More Info',
      buttonHref: '#'
    },
    {
      id: 'searching',
      tabText: 'Speedy Searching',
      title: 'Intelligent search',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through al',
      imageSrc: './Recursos/Imagenes/illustration-features-tab-2.svg',
      imageAlt: 'Searching feature'
    },
    {
      id: 'sharing',
      tabText: 'Easy Sharing',
      title: 'Share your bookmarks',
      description: 'Easily share your bookmarks and collections with others. Create a shareable a link that you can send at', 
      imageSrc: './Recursos/Imagenes/illustration-features-tab-3.svg',
      imageAlt: 'Sharing feature'
    }
  ];

  ngOnInit(): void {
    if (this.featuresData.length > 0) {
      this.activeTabId = this.featuresData[0].id;
    }
  }
  get tabs() {
    return this.featuresData.map(feature => ({
      text: feature.tabText,
      id: feature.id
    }));
  }
  get currentFeature() {
    return this.featuresData.find(feature => feature.id === this.activeTabId) || this.featuresData[0];
  }
  onTabChange(tabId: string): void {
    this.activeTabId = tabId;
  }
}
