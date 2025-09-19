import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  imports: [],
  templateUrl: './tab-button.html',
  styleUrl: './tab-button.css',
  standalone: true,

})
export class TabButton {
  @Input() text: string = '';
  @Input() isActive: boolean = false;
  @Output() tabClick = new EventEmitter<void>();

  onTabClick(): void {
    this.tabClick.emit();
  }
}
