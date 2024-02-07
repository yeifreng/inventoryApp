import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)},
  {path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
