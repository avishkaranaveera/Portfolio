package com.avishka.portfolio.controller;

import com.avishka.portfolio.dto.ContactRequest;
import com.avishka.portfolio.model.ContactMessage;
import com.avishka.portfolio.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactMessageRepository contactMessageRepository;

    public ContactController(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    @PostMapping
    public ResponseEntity<Void> submitMessage(@Valid @RequestBody ContactRequest request) {
        contactMessageRepository.save(
                new ContactMessage(request.name(), request.email(), request.message())
        );
        return ResponseEntity.ok().build();
    }
}
