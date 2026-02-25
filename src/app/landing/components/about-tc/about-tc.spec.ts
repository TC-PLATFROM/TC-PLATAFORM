import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTc } from './about-tc';

describe('AboutTc', () => {
  let component: AboutTc;
  let fixture: ComponentFixture<AboutTc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
