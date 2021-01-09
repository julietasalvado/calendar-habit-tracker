package com.calendar.habittracker.configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;

@org.springframework.context.annotation.Configuration
public class OpenApiConfiguration {

  @Bean
  public OpenAPI customOpenAPI() {
    return new OpenAPI()
            .components(new Components())
            .info(new Info().title("Habit Tracker Application API").description(
                    "This is a sample Spring Boot RESTful service using springdoc-openapi and OpenAPI 3."));
  }
}
