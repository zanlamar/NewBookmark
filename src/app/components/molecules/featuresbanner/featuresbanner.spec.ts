import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featuresbanner } from './featuresbanner';

describe('Featuresbanner', () => {
  let component: Featuresbanner;
  let fixture: ComponentFixture<Featuresbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featuresbanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featuresbanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
