import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesContent } from './features-content';

describe('FeaturesContent', () => {
  let component: FeaturesContent;
  let fixture: ComponentFixture<FeaturesContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
