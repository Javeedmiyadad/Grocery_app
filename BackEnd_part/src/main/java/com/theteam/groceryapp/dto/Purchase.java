package com.theteam.groceryapp.dto;

import java.util.Set;

import com.theteam.groceryapp.entity.Address;
import com.theteam.groceryapp.entity.Customer;
import com.theteam.groceryapp.entity.Order;
import com.theteam.groceryapp.entity.OrderItem;

import lombok.Data;

@Data
public class Purchase {
	private Customer customer;
	private Address shippingAddress;
	private Address billingAddress;
	private Order order;
	private Set<OrderItem> orderItems;

}
