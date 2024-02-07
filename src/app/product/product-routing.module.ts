import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPorductsComponent } from './pages/list-products/list-porducts.component';
import { AddPorductsComponent } from './pages/add-porducts/add-porducts.component';

const routes: Routes = [

  {path: 'list-product', component: ListPorductsComponent},
  {path: 'add-product', component: AddPorductsComponent},
  {path: '**', redirectTo: 'list-product'}

]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
