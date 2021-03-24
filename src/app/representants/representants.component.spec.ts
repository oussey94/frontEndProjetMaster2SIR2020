import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantsComponent } from './representants.component';

describe('RepresentantsComponent', () => {
  let component: RepresentantsComponent;
  let fixture: ComponentFixture<RepresentantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
