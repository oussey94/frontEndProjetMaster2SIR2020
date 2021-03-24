import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesBancairesComponent } from './references-bancaires.component';

describe('ReferencesBancairesComponent', () => {
  let component: ReferencesBancairesComponent;
  let fixture: ComponentFixture<ReferencesBancairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesBancairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesBancairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
