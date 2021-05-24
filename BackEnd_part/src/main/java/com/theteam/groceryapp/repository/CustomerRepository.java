package com.theteam.groceryapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.theteam.groceryapp.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
	Customer findByEmail(String theEmail);

}