package com.avishka.portfolio.controller;

import com.avishka.portfolio.model.Certification;
import com.avishka.portfolio.repository.CertificationRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/certifications")
public class CertificationController {

    private final CertificationRepository certificationRepository;

    public CertificationController(CertificationRepository certificationRepository) {
        this.certificationRepository = certificationRepository;
    }

    @GetMapping
    public List<Certification> getCertifications() {
        return certificationRepository.findAll();
    }
}
