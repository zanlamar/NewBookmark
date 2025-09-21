import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TabNav } from './tab-nav';

describe('TabNav', () => {
  let component: TabNav;
  let fixture: ComponentFixture<TabNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render the correct number of tabs', () => { component.tabs = [
    { id: 'tab1', text: 'Tab 1' },
    { id: 'tab2', text: 'Tab 2' }
  ];
  fixture.detectChanges();

  const tabButtons = fixture.nativeElement.querySelectorAll('app-tab-button');
  expect(tabButtons.length).toBe(2);
});

  it('should emit tabChange when a tab is clicked', () => {
    spyOn(component.tabChange, 'emit');

    component.tabs = [
      { id: 'tab1', text: 'Tab 1' },
      { id: 'tab2', text: 'Tab 2' }
    ];
    fixture.detectChanges();

    const tabButton = fixture.debugElement.queryAll(By.css('app-tab-button'))[0];
    tabButton.triggerEventHandler('tabClick', null);

    expect(component.tabChange.emit).toHaveBeenCalledWith('tab1');
  });

});
