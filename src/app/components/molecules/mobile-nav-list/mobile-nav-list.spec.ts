import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavList } from './mobile-nav-list';

describe('MobileNavList', () => {
  let component: MobileNavList;
  let fixture: ComponentFixture<MobileNavList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNavList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
