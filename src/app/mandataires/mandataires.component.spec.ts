import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatairesComponent } from './mandataires.component';

describe('MandatairesComponent', () => {
  let component: MandatairesComponent;
  let fixture: ComponentFixture<MandatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandatairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
