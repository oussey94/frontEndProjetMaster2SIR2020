import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositionGeneralesComponent } from './disposition-generales.component';

describe('DispositionGeneralesComponent', () => {
  let component: DispositionGeneralesComponent;
  let fixture: ComponentFixture<DispositionGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositionGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositionGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
