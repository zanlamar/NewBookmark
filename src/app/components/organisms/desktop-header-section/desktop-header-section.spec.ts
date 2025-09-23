import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DesktopHeaderSection } from './desktop-header-section';

describe('DesktopHeaderSection', () => {
  let component: DesktopHeaderSection;
  let fixture: ComponentFixture<DesktopHeaderSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopHeaderSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopHeaderSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should toggle mobile menu when hamburger is clicked', () => {
    const hamburgerButton = fixture.debugElement.query(
      By.css('app-button[variant="hamburger"]')
    );
    
    expect(component.isMobileNavOpen).toBeFalse();

    const overlay = fixture.nativeElement.querySelector('.mobile-menu-overlay');
    expect(overlay).toBeTruthy();
    expect(overlay.classList.contains('active')).toBeFalse();
    
    hamburgerButton.triggerEventHandler('onClick', null);
    fixture.detectChanges();
    
    expect(component.isMobileNavOpen).toBeTrue();
    expect(fixture.nativeElement.querySelector('.mobile-menu-overlay')).not.toBeNull();
  });

  it('should close mobile menu when close button is clicked', () => {
    component.isMobileNavOpen = true;
    fixture.detectChanges();

    const closeButton = fixture.debugElement.query(
      By.css('app-button[variant="close"]')
    );
    
    expect(component.isMobileNavOpen).toBeTrue();
    
    closeButton.triggerEventHandler('onClick', null);
    fixture.detectChanges();
    
    expect(component.isMobileNavOpen).toBeFalse();
  });

})
