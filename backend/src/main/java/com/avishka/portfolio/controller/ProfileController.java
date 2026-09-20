package com.avishka.portfolio.controller;

import com.avishka.portfolio.dto.ProfileResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @GetMapping
    public ProfileResponse getProfile() {
        return new ProfileResponse(
                "Avishka Ranaveera",
                "Full-Stack Developer",
                "Building clean, reliable web applications",
                "I'm a full-stack developer who enjoys turning ideas into working products, "
                        + "from REST APIs with Spring Boot to responsive interfaces with React. "
                        + "I care about clean architecture, readable code, and shipping things that "
                        + "actually solve the problem in front of me, not just the resume-friendly "
                        + "version of it. Outside of client work I spend time exploring new tools in "
                        + "the Java and JavaScript ecosystems and contributing to small open-source "
                        + "utilities. Replace this bio with your own story.",
                "Sri Lanka",
                "ashenikarunarathna2002@gmail.com",
                "/resume.pdf",
                List.of(
                        "Full-stack delivery: one developer covering backend, frontend, and deployment",
                        "Clean, tested, maintainable code — not just code that runs once",
                        "Clear communication and realistic timelines, no scope surprises",
                        "Fast turnaround on bug fixes and iteration during active projects"
                ),
                List.of(
                        new ProfileResponse.SocialLink("GitHub", "https://github.com/your-username"),
                        new ProfileResponse.SocialLink("LinkedIn", "https://linkedin.com/in/your-username")
                )
        );
    }
}
