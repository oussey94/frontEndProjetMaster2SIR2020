import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMandataireComponent } from './update-mandataire.component';

describe('UpdateMandataireComponent', () => {
  let component: UpdateMandataireComponent;
  let fixture: ComponentFixture<UpdateMandataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMandataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMandataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
