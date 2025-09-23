import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSection } from './first-section';

describe('FirstSection', () => {
  let component: FirstSection;
  let fixture: ComponentFixture<FirstSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
