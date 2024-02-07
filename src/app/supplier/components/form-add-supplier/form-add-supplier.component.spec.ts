import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddSupplierComponent } from './form-add-supplier.component';

describe('FormAddSupplierComponent', () => {
  let component: FormAddSupplierComponent;
  let fixture: ComponentFixture<FormAddSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
