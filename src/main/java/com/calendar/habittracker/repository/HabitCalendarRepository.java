package com.calendar.habittracker.repository;

import com.calendar.habittracker.model.Day;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.Month;
import java.util.Optional;

@Repository
public interface HabitCalendarRepository extends MongoRepository<Day, String> {
  @Query("{year : ?0, month : ?1, day: ?2}")
  Optional<Day> findDay(int year, Month month, int dayOfMonth);
}
