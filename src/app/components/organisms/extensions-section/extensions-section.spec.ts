import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsSection } from './extensions-section';

describe('ExtensionsSection', () => {
  let component: ExtensionsSection;
  let fixture: ComponentFixture<ExtensionsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
