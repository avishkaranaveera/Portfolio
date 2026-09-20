package com.avishka.portfolio.repository;

import com.avishka.portfolio.model.Certification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificationRepository extends JpaRepository<Certification, Long> {
}
