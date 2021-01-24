package com.calendar.habittracker.model;

import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
public class DayHabit {
  private String colorId;
  private Set<String> colorTitle;
  private int intensity;

  public int increaseIntensity(String title) {
    colorTitle.add(title);
    return ++intensity;
  }
}
