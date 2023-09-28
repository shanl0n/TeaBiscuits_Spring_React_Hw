package com.codeclan.teaandbiscuits.models;


import javax.persistence.*;

@Entity
@Table(name="teas")

public class Tea {
	@Column(name="Name")
	private String name;
	@Column(name="Brand")
	private String brand;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Tea(String name, String brand){
		this.name = name;
		this.brand = brand;

	}

	public Tea(){
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}
}
