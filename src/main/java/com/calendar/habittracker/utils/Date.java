package com.calendar.habittracker.utils;

import lombok.Builder;
import lombok.Data;

import java.time.Month;

@Data
@Builder
public class Date {
  private int year;
  private Month month;
  private int dayOfMonth;
}
