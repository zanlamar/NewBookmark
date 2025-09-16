import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDiv } from './buttons-div';

describe('ButtonsDiv', () => {
  let component: ButtonsDiv;
  let fixture: ComponentFixture<ButtonsDiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsDiv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsDiv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
