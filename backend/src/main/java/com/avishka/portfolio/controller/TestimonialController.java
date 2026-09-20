package com.avishka.portfolio.controller;

import com.avishka.portfolio.model.Testimonial;
import com.avishka.portfolio.repository.TestimonialRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
public class TestimonialController {

    private final TestimonialRepository testimonialRepository;

    public TestimonialController(TestimonialRepository testimonialRepository) {
        this.testimonialRepository = testimonialRepository;
    }

    @GetMapping
    public List<Testimonial> getTestimonials() {
        return testimonialRepository.findAll();
    }
}
