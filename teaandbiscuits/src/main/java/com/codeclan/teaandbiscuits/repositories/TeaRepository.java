package com.codeclan.teaandbiscuits.repositories;

import com.codeclan.teaandbiscuits.models.Tea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeaRepository extends JpaRepository<Tea, Long> {
}
