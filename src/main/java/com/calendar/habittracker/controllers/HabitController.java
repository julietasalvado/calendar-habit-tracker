package com.calendar.habittracker.controllers;

import com.calendar.habittracker.services.IHabitService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Habits")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class HabitController implements IHabitController {
  private final IHabitService habitService;

  @Override
  public ResponseEntity logHabit(String id) {
    return ResponseEntity.status(HttpStatus.OK)
            .body(habitService.logHabit(id));
  }
}
