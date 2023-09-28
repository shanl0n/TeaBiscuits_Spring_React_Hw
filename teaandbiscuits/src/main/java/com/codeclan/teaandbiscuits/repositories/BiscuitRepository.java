package com.codeclan.teaandbiscuits.repositories;

import com.codeclan.teaandbiscuits.models.Biscuit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface BiscuitRepository extends JpaRepository<Biscuit, Long> {
}
