import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ProductService } from './Service/product.service';
import { ProductDetailsComponent } from './Component/product-detail/product-detail.component';
import { ProductCategoryMenuComponent } from './Component/product-category-menu/product-category-menu.component';
import { CartStatusComponent } from './Component/cart-status/cart-status.component';
import { CartDetailsComponent } from './Component/cart-details/cart-details.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { SearchComponent } from './Component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutComponent } from './Component/about/about.component';
import { PrivacyComponent } from './Component/privacy/privacy.component';
import { LoginComponent } from './Component/login/login.component';
import { LoginStatusComponent } from './Component/login-status/login-status.component';
import {
  OKTA_CONFIG,
  OktaAuthModule,
} from '@okta/okta-angular';

import myAppConfig from './config/my-app-config';
import { AuthenticationService } from './Service/authentication.service';
import { Router } from '@angular/router';
import { OrderHistoryComponent } from './Component/order-history/order-history.component';
import { HomeComponent } from './Component/home/home.component';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth, injector) => {
    const router = injector.get(Router);

    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCategoryMenuComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    SearchComponent,
    ContactComponent,
    AboutComponent,
    PrivacyComponent,
    LoginComponent,
    LoginStatusComponent,
    OrderHistoryComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    OktaAuthModule,

  ],
  providers: [ProductService, { provide: OKTA_CONFIG, useValue: oktaConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
