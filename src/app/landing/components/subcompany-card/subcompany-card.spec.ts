import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcompanyCard } from './subcompany-card';

describe('SubcompanyCard', () => {
  let component: SubcompanyCard;
  let fixture: ComponentFixture<SubcompanyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcompanyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcompanyCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
