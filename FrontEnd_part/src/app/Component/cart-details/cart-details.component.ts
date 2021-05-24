import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import myAppConfig from 'src/app/config/my-app-config';
import { CartItem } from 'src/app/models/cart-item';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  //  user:User;
  // userFullName:String;
  // storage: Storage = sessionStorage;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }
  // getUserDetails() {
  //   if (this.isAuthenticated) {

  //     // Fetch the logged in user details (user's claims)
  //     //
  //     // user full name is exposed as a property name
  //     this.oktaAuthService.getUser().then(
  //       (res) => {
  //         this.userFullName = res.name;

  //         // retrieve the user's email from authentication response
  //         const theEmail = res.email;

  //         // now store the email in browser storage
  //         this.storage.setItem('userEmail', JSON.stringify(theEmail));
  //       }
  //      );
  //    }
  //   }
  // gotoCheckout(){
  //   if(this.isAuthenticated){
  //   this.router.navigate(['/checkout']);
  //   }
  //   else{
  //     this.router.navigate(['/login']);
  //   }
  // }
  
}