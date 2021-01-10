package com.calendar.habittracker.model;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import java.time.Month;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(MockitoJUnitRunner.class)
public class DayTest {
  private static final int DAY_OF_MONTH = 28;
  private static final int YEAR = 2109;
  private static final Month MONTH = Month.APRIL;
  private static final String COLOR_TITLE = "color title";
  private static final String COLOR_ID = "1";

  @Test
  public void createDayThenSetDayHabitIntensityOne() {
    // given & when
    Day day = Day.builder()
            .month(MONTH)
            .day(DAY_OF_MONTH)
            .year(YEAR)
            .firstHabitExecuted(COLOR_ID, COLOR_TITLE)
            .build();

    // then
    assertThat(MONTH).isEqualTo(day.getMonth());
    assertThat(DAY_OF_MONTH).isEqualTo(day.getDay());
    assertThat(YEAR).isEqualTo(day.getYear());
    Set<DayHabit> habitsExecuted = day.getHabitsExecuted();
    assertThat(habitsExecuted).hasSize(1);
    habitsExecuted.stream().forEach(dayHabit -> {
      assertThat(dayHabit.getColorId()).isEqualTo(COLOR_ID);
      assertThat(dayHabit.getColorTitle()).containsExactly(COLOR_TITLE);
      assertThat(dayHabit.getIntensity()).isEqualTo(1);
    });
  }

}