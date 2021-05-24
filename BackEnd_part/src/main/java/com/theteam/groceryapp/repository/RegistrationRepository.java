package com.theteam.groceryapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.theteam.groceryapp.entity.User;

public interface RegistrationRepository extends JpaRepository <User, Long> {
	public User findByEmailId(String emailId);
	public User findByEmailIdAndPassword(String email,String password);

}
