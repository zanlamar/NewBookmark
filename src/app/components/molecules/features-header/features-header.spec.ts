import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHeader } from './features-header';

describe('FeaturesHeader', () => {
  let component: FeaturesHeader;
  let fixture: ComponentFixture<FeaturesHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
