import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppCategoryComponent } from './form-app-category.component';

describe('FormAppCategoryComponent', () => {
  let component: FormAppCategoryComponent;
  let fixture: ComponentFixture<FormAppCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAppCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAppCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
