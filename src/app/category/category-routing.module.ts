import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { AddCategoriesComponent } from './pages/add-categories/add-categories.component';

const routes: Routes = [

  {path: 'list-category', component: ListCategoriesComponent},
  {path: 'add-category', component: AddCategoriesComponent},
  {path: '**', redirectTo: 'list-category'}

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryRoutingModule { }
