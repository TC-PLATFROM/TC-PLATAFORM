import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subir } from './subir';

describe('Subir', () => {
  let component: Subir;
  let fixture: ComponentFixture<Subir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
