import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReferencesBancairesComponent } from './update-references-bancaires.component';

describe('UpdateReferencesBancairesComponent', () => {
  let component: UpdateReferencesBancairesComponent;
  let fixture: ComponentFixture<UpdateReferencesBancairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReferencesBancairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReferencesBancairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
