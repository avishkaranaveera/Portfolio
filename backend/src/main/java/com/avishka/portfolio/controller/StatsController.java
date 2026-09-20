package com.avishka.portfolio.controller;

import com.avishka.portfolio.dto.StatsResponse;
import com.avishka.portfolio.repository.CertificationRepository;
import com.avishka.portfolio.repository.ProjectRepository;
import com.avishka.portfolio.repository.SkillRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stats")
public class StatsController {

    private static final int YEARS_EXPERIENCE = 3;

    private final ProjectRepository projectRepository;
    private final CertificationRepository certificationRepository;
    private final SkillRepository skillRepository;

    public StatsController(
            ProjectRepository projectRepository,
            CertificationRepository certificationRepository,
            SkillRepository skillRepository
    ) {
        this.projectRepository = projectRepository;
        this.certificationRepository = certificationRepository;
        this.skillRepository = skillRepository;
    }

    @GetMapping
    public StatsResponse getStats() {
        return new StatsResponse(
                projectRepository.count(),
                certificationRepository.count(),
                YEARS_EXPERIENCE,
                (int) skillRepository.count()
        );
    }
}
