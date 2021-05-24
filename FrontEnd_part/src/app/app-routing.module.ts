import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { CartDetailsComponent } from './Component/cart-details/cart-details.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { ContactComponent } from './Component/contact/contact.component';
import { PrivacyComponent } from './Component/privacy/privacy.component';
import { ProductDetailsComponent } from './Component/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';



import { LoginComponent } from './Component/login/login.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { OrderHistoryComponent } from './Component/order-history/order-history.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'order-history', component: OrderHistoryComponent, canActivate: [OktaAuthGuard] },

  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
