package com.calendar.habittracker.controllers;

import com.calendar.habittracker.model.Color;
import com.calendar.habittracker.repository.ColorRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name = "Colors")
@EnableAutoConfiguration
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ColorController {

  private final ColorRepository colorRepository;

  @Operation(summary = "Get colors and the title linked to each one")
  @ApiResponses(value = {
          @ApiResponse(
                  responseCode = "200",
                  description = "Colors were found",
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
  @GetMapping(path = "/colors", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public ResponseEntity<List<Color>> getColors() {
    final List<Color> colors = colorRepository.findAll();
    return new ResponseEntity<>(colors, HttpStatus.OK);
  }
}
