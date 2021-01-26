package com.calendar.habittracker.utils;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DateUtils {
  public Date getDate() {
    LocalDateTime currentDate = LocalDateTime.now();
    return Date.builder()
            .year(currentDate.getYear())
            .month(currentDate.getMonth())
            .dayOfMonth(currentDate.getDayOfMonth())
            .build();
  }
}
