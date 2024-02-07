import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSupplierComponent } from './pages/list-supplier/list-supplier.component';
import { AddSupplierComponent } from './pages/add-supplier/add-supplier.component';

const routes: Routes = [

  {path:'list-supplier', component: ListSupplierComponent},
  {path: 'add-supplier', component: AddSupplierComponent},
  {path: '**', redirectTo: 'list-supplier'}

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SupplierRoutingModule { }
