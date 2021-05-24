package com.theteam.groceryapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.theteam.groceryapp.entity.User;
import com.theteam.groceryapp.service.RegistrationService;

@RestController
@CrossOrigin("http://localhost:4200")
public class RegisterController {

	@Autowired
	private RegistrationService service;

	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			User userObj = service.fetchUserByEmailId(tempEmailId);
			if (userObj != null) {
				throw new Exception("user with " + tempEmailId + " is already exists");
			}
		}

		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;

	}

	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		User userObj = null;
		if (tempEmailId != null && tempPass != null) {
			userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if (userObj == null) {
			throw new Exception("Bad credentials");
		}
		return userObj;
	}

}
