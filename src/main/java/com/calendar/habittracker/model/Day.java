package com.calendar.habittracker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Month;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "days")
public class Day {
  @Id
  private String id;
  private int year;
  private Month month;
  private int day;
  private Set<DayHabit> habitsExecuted;

  public static DayBuilder builder() {
    return new DayBuilder();
  }

  public static class DayBuilder {
    private  static final int INITIAL_INTENSITY = 1;

    private String id;
    private int year;
    private Month month;
    private int day;
    private Set<DayHabit> habitsExecuted;

    DayBuilder() {
    }

    public DayBuilder id(String id) {
      this.id = id;
      return this;
    }

    public DayBuilder year(int year) {
      this.year = year;
      return this;
    }

    public DayBuilder month(Month month) {
      this.month = month;
      return this;
    }

    public DayBuilder day(int day) {
      this.day = day;
      return this;
    }

    public DayBuilder firstHabitExecuted(String colorId, String colorTitle) {
      this.habitsExecuted = new HashSet(Arrays.asList(DayHabit.builder()
              .colorId(colorId)
              .colorTitle(new HashSet(Arrays.asList(colorTitle)))
              .intensity(INITIAL_INTENSITY)
              .build()));
      return this;
    }

    public Day build() {
      return new Day(id, year, month, day, habitsExecuted);
    }

    public String toString() {
      return "Day.DayBuilder(id=" + this.id + ", year=" + this.year + ", month=" + this.month + ", day=" + this.day + ", habitsExecuted=" + this.habitsExecuted + ")";
    }
  }
}
