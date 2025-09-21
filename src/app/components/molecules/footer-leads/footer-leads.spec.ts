import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLeads } from './footer-leads';

describe('FooterLeads', () => {
  let component: FooterLeads;
  let fixture: ComponentFixture<FooterLeads>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLeads]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLeads);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
