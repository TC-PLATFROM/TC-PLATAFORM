import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcompaniesSection } from './subcompanies-section';

describe('SubcompaniesSection', () => {
  let component: SubcompaniesSection;
  let fixture: ComponentFixture<SubcompaniesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcompaniesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcompaniesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
