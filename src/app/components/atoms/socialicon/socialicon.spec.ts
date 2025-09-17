import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Socialicon } from './socialicon';

describe('Socialicon', () => {
  let component: Socialicon;
  let fixture: ComponentFixture<Socialicon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Socialicon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Socialicon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
