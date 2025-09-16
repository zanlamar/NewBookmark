import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featureimage } from './featureimage';

describe('Featureimage', () => {
  let component: Featureimage;
  let fixture: ComponentFixture<Featureimage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featureimage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featureimage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
