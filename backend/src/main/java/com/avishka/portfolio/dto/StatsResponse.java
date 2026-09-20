package com.avishka.portfolio.dto;

public record StatsResponse(
        long projectsCount,
        long certificationsCount,
        int yearsExperience,
        int technologiesCount
) {
}
