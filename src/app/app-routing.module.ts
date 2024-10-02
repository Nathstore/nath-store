import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { SigninComponent } from './user/signin/signin.component';
import { AboutusComponent } from './natstore/aboutus/aboutus.component';
import { AdministrationComponent } from './administration/administration/administration.component';


const routes: Routes = [
  { path: '', redirectTo:'/products', pathMatch:'full'},
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartViewComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'administration', component: AdministrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
