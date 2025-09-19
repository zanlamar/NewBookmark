import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
