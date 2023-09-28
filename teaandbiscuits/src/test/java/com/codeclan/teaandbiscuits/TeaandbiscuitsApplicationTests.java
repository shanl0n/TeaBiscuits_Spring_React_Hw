package com.codeclan.teaandbiscuits;

import com.codeclan.teaandbiscuits.models.Biscuit;
import com.codeclan.teaandbiscuits.models.Tea;
import com.codeclan.teaandbiscuits.repositories.BiscuitRepository;
import com.codeclan.teaandbiscuits.repositories.TeaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TeaandbiscuitsApplicationTests {

	@Autowired
	TeaRepository teaRepository;

	@Autowired
	BiscuitRepository biscuitRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createTea() {
		Tea tea = new Tea("Cherry Cinnamon", "Twinings");
		teaRepository.save(tea);
	}

	@Test
	public void createBiscuit() {
		Biscuit biscuit = new Biscuit("Caramel Wafer", "Tunnocks");
		biscuitRepository.save(biscuit);
	}

}
