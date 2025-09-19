import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TabButton } from "../../../atoms/tab-button/tab-button";

interface TabData {
  text: string;
  id: string;
}

@Component({
  selector: 'app-tab-nav',
  imports: [TabButton],
  templateUrl: './tab-nav.html',
  styleUrl: './tab-nav.css',
  standalone: true
})

  export class TabNav {
    @Input() tabs: TabData[] = [];
    @Input() activeTabId: string = '';
    @Output() tabChange = new EventEmitter<string>();
    onTabClick(tabId: string): void {
      this.tabChange.emit(tabId)
  }
}
