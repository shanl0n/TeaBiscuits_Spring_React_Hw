package com.codeclan.teaandbiscuits.controllers;

import com.codeclan.teaandbiscuits.models.Biscuit;
import com.codeclan.teaandbiscuits.repositories.BiscuitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BiscuitController {
	@Autowired
	BiscuitRepository biscuitRepository;

	@GetMapping(value = "api/biscuits")
	public List<Biscuit> getAllBiscuits() {
		return biscuitRepository.findAll();
	}

	@GetMapping(value = "api/biscuits/{id}")
	public Optional<Biscuit> getBiscuit(@PathVariable Long id) {
		return biscuitRepository.findById(id);
	}

	@PostMapping(value = "api/biscuits")
	public Biscuit createBiscuit(@RequestBody Biscuit biscuit)  {
		return biscuitRepository.save(biscuit);
	}

	@DeleteMapping(value = "api/biscuits/{id}")
	public void deleteBiscuit(@PathVariable Long id) {
		biscuitRepository.deleteById(id);
	}

	@PutMapping(value = "api/biscuits/{id}")
	public Biscuit replaceBiscuit(@PathVariable Long id, @RequestBody Biscuit newBiscuit) {
		return biscuitRepository.findById(id).map(biscuit -> {
			biscuit.setName(newBiscuit.getName());
			biscuit.setBrand(newBiscuit.getBrand());
			return biscuitRepository.save(biscuit);
		}).orElseGet(() -> {
			newBiscuit.setId(id);
			return biscuitRepository.save(newBiscuit);
		});
	}



}
