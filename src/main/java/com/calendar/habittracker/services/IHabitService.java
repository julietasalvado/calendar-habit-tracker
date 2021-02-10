package com.calendar.habittracker.services;

import com.calendar.habittracker.model.Day;

import java.time.Month;
import java.util.List;
import java.util.Optional;

public interface IHabitService {
  Optional<Day> logHabit(String habitId);

  List<Day> getMonth(int year, Month month);
}
