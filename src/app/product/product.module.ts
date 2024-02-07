import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPorductsComponent } from './pages/list-products/list-porducts.component';
import { AddPorductsComponent } from './pages/add-porducts/add-porducts.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { TableProductComponent } from './components/table-product/table-product.component';
import { FormAddProductComponent } from './components/form-add-product/form-add-product.component';



@NgModule({
  declarations: [
    ListPorductsComponent,
    AddPorductsComponent,
    TableProductComponent,
    FormAddProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
