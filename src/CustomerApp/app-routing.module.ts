import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'Home', component : HomeComponent},
  {path : 'Customer', component : CustomerComponent},
  {path : 'Supplier', component : SupplierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
