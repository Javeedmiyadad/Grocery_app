package com.theteam.groceryapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.theteam.groceryapp.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
