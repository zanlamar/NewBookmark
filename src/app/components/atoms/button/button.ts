import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  standalone: true,
})

export class Button {
  @Input() variant: 'blue' | 'light' | 'red' | 'hamburger' | 'close' | 'mobile-login' = 'red';
  @Input() href?: string;
  @Input() text: string = '';
  @Input() additionalClasses?: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<Event>();


  get isButton(): boolean {
    return !this.href;
  }

  get buttonClasses(): string {
    const baseClass = this.getBaseClass();
    const variantClass = this.getVariantClass();
    const additionalClass = this.additionalClasses ? ` ${this.additionalClasses}` : '';
    
    return `${baseClass}${variantClass}${additionalClass}`;
  }

  private getBaseClass(): string {
    if (['blue', 'light', 'red'].includes(this.variant)) {
      return 'btn ';
    }
    return '';
  }

  private getVariantClass(): string {
    const variants = {
      'blue': 'btn-blue',
      'light': 'btn-light',
      'red': 'btn-red',
      'hamburger': 'hamburger',
      'close': 'mobile-menu-close',
      'mobile-login': 'mobile-login-btn'
    };
    return variants[this.variant] || variants['red'];
  }

  onButtonClick(event: Event): void {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}