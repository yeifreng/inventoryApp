import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSupplierComponent } from './pages/list-supplier/list-supplier.component';
import { AddSupplierComponent } from './pages/add-supplier/add-supplier.component';
import { SharedModule } from '../shared/shared.module';
import { SupplierRoutingModule } from './supplier-routing.module';
import { TableSupplierComponent } from './components/table-supplier/table-supplier.component';
import { FormAddSupplierComponent } from './components/form-add-supplier/form-add-supplier.component';



@NgModule({
  declarations: [
    ListSupplierComponent,
    AddSupplierComponent,
    TableSupplierComponent,
    FormAddSupplierComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
