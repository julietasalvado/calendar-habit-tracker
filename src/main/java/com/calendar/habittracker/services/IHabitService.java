package com.calendar.habittracker.services;

import com.calendar.habittracker.model.Day;

import java.util.Optional;

public interface IHabitService {
  Optional<Day> logHabit(String habitId);
}
