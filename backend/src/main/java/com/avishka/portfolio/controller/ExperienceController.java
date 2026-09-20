package com.avishka.portfolio.controller;

import com.avishka.portfolio.model.Experience;
import com.avishka.portfolio.repository.ExperienceRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/experience")
public class ExperienceController {

    private final ExperienceRepository experienceRepository;

    public ExperienceController(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    @GetMapping
    public List<Experience> getExperience() {
        return experienceRepository.findAllByOrderBySortOrderAsc();
    }
}
