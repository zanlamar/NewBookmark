import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobannerSection } from './herobanner-section';

describe('HerobannerSection', () => {
  let component: HerobannerSection;
  let fixture: ComponentFixture<HerobannerSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerobannerSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerobannerSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
