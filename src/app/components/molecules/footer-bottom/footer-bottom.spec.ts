import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBottom } from './footer-bottom';

describe('FooterBottom', () => {
  let component: FooterBottom;
  let fixture: ComponentFixture<FooterBottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBottom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
