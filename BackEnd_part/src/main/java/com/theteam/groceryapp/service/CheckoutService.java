package com.theteam.groceryapp.service;

import com.theteam.groceryapp.dto.Purchase;
import com.theteam.groceryapp.dto.PurchaseResponse;

public interface CheckoutService {
	PurchaseResponse placeOrder(Purchase purchase);

}
