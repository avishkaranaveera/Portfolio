package com.avishka.portfolio.config;

import com.avishka.portfolio.model.Certification;
import com.avishka.portfolio.model.Experience;
import com.avishka.portfolio.model.Project;
import com.avishka.portfolio.model.Skill;
import com.avishka.portfolio.model.Testimonial;
import com.avishka.portfolio.repository.CertificationRepository;
import com.avishka.portfolio.repository.ExperienceRepository;
import com.avishka.portfolio.repository.ProjectRepository;
import com.avishka.portfolio.repository.SkillRepository;
import com.avishka.portfolio.repository.TestimonialRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;
    private final CertificationRepository certificationRepository;
    private final ExperienceRepository experienceRepository;
    private final TestimonialRepository testimonialRepository;

    public DataSeeder(
            ProjectRepository projectRepository,
            SkillRepository skillRepository,
            CertificationRepository certificationRepository,
            ExperienceRepository experienceRepository,
            TestimonialRepository testimonialRepository
    ) {
        this.projectRepository = projectRepository;
        this.skillRepository = skillRepository;
        this.certificationRepository = certificationRepository;
        this.experienceRepository = experienceRepository;
        this.testimonialRepository = testimonialRepository;
    }

    @Override
    public void run(String... args) {
        if (skillRepository.count() == 0) {
            skillRepository.saveAll(List.of(
                    new Skill("Java", "Backend", 90),
                    new Skill("Spring Boot", "Backend", 85),
                    new Skill("React", "Frontend", 85),
                    new Skill("JavaScript", "Frontend", 80),
                    new Skill("SQL", "Database", 75),
                    new Skill("Git", "Tools", 85)
            ));
        }

        if (projectRepository.count() == 0) {
            projectRepository.saveAll(List.of(
                    Project.builder()
                            .title("Sample Project One")
                            .description("A short description of what this project does and the "
                                    + "problem it solves. Replace with your real project.")
                            .tags(List.of("React", "Spring Boot", "PostgreSQL"))
                            .imageUrl("")
                            .repoUrl("https://github.com/your-username/project-one")
                            .liveUrl("")
                            .featured(true)
                            .build(),
                    Project.builder()
                            .title("Sample Project Two")
                            .description("Another project summary highlighting the tech stack and "
                                    + "your role in building it.")
                            .tags(List.of("Java", "REST API"))
                            .imageUrl("")
                            .repoUrl("https://github.com/your-username/project-two")
                            .liveUrl("")
                            .featured(false)
                            .build()
            ));
        }

        if (certificationRepository.count() == 0) {
            certificationRepository.saveAll(List.of(
                    Certification.builder()
                            .title("Oracle Certified Professional: Java SE Developer")
                            .issuer("Oracle")
                            .issueDate("2024")
                            .credentialUrl("")
                            .build(),
                    Certification.builder()
                            .title("AWS Certified Cloud Practitioner")
                            .issuer("Amazon Web Services")
                            .issueDate("2024")
                            .credentialUrl("")
                            .build(),
                    Certification.builder()
                            .title("Meta Front-End Developer Professional Certificate")
                            .issuer("Meta")
                            .issueDate("2023")
                            .credentialUrl("")
                            .build()
            ));
        }

        if (experienceRepository.count() == 0) {
            experienceRepository.saveAll(List.of(
                    Experience.builder()
                            .type("WORK")
                            .title("Full-Stack Developer")
                            .organization("Freelance / Contract")
                            .period("2024 — Present")
                            .description("Designing and building full-stack web applications for "
                                    + "clients, covering everything from API design to deployment. "
                                    + "Replace with your real role.")
                            .sortOrder(1)
                            .build(),
                    Experience.builder()
                            .type("EDUCATION")
                            .title("BSc (Hons) in Software Engineering")
                            .organization("Your University")
                            .period("2021 — 2025")
                            .description("Coursework in data structures, databases, software "
                                    + "architecture, and web development.")
                            .sortOrder(2)
                            .build(),
                    Experience.builder()
                            .type("WORK")
                            .title("Junior Developer Intern")
                            .organization("A Company")
                            .period("2023 — 2024")
                            .description("Contributed to internal tools and learned production "
                                    + "engineering practices as part of a small team.")
                            .sortOrder(3)
                            .build()
            ));
        }

        if (testimonialRepository.count() == 0) {
            testimonialRepository.saveAll(List.of(
                    Testimonial.builder()
                            .author("Jane Client")
                            .role("Founder, Example Startup")
                            .quote("Delivered exactly what we asked for, on time, and communicated "
                                    + "clearly the whole way through. Replace with a real quote.")
                            .build(),
                    Testimonial.builder()
                            .author("John Manager")
                            .role("Product Lead, Example Co.")
                            .quote("Solid engineering instincts and easy to work with. Would hire "
                                    + "again.")
                            .build()
            ));
        }
    }
}
