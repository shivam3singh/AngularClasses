package com.masai.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
public class Address {

	private String city;
	private String state;
	private String pincode;
}
