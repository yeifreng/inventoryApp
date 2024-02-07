import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { AddCategoriesComponent } from './pages/add-categories/add-categories.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { TableCategoryComponent } from './components/table-category/table-category.component';
import { FormAppCategoryComponent } from './components/form-app-category/form-app-category.component';



@NgModule({
  declarations: [
    ListCategoriesComponent,
    AddCategoriesComponent,
    TableCategoryComponent,
    FormAppCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
