package com.calendar.habittracker.controllers;

import com.calendar.habittracker.model.Color;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

public interface IHabitController {

  @Operation(summary = "Log a habit getting stronger")
  @ApiResponses(value = {
          @ApiResponse(
                  responseCode = "200",
                  description = "Habit got stronger",
                  content = @Content(array = @ArraySchema(schema = @Schema(implementation = Color.class)),
                          examples = {
                                  @ExampleObject(
                                          value =
                                                  "[{\"id\": 1,"
                                                          + "\"title\": \"Italian\""
                                                          + "}, "
                                                          + "{\"id\": 2, "
                                                          + "\"title\": \"Books\""
                                                          + "}]"
                                  )})),
          @ApiResponse(
                  responseCode = "500",
                  description = "Internal Server Error",
                  content = @Content(array = @ArraySchema(schema = @Schema(implementation = Error.class)))
          ),
          @ApiResponse(
                  responseCode = "400",
                  description = "Not Found",
                  content = @Content(array = @ArraySchema(schema = @Schema(implementation = Error.class)))
          )
  })
  @PostMapping(path = "/habits/{id}", produces = "application/json")
  ResponseEntity logHabit(@Parameter(description = "id of the habit to be logged")
                          @PathVariable String id);
}
