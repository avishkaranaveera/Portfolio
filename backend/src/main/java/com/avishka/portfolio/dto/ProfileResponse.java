package com.avishka.portfolio.dto;

import java.util.List;

public record ProfileResponse(
        String name,
        String title,
        String tagline,
        String bio,
        String location,
        String email,
        String photoUrl,
        String resumeUrl,
        List<String> highlights,
        List<SocialLink> socials
) {
    public record SocialLink(String platform, String url) {
    }
}
