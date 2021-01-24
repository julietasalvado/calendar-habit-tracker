package com.calendar.habittracker.services;

import com.calendar.habittracker.model.Day;
import com.calendar.habittracker.model.DayHabit;
import com.calendar.habittracker.model.Topic;
import com.calendar.habittracker.repository.HabitCalendarRepository;
import com.calendar.habittracker.utils.Date;
import com.calendar.habittracker.utils.DateUtils;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.time.Month;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertSame;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class HabitServiceTest {

  private static final String TOPIC_ID = "ID";
  private static final int LEVEL = 1;
  private static final int COMPLETED = 33;
  private static final String ID = "1";
  private static final String TITLE = "title";
  private static final List EMPTY_RESOURCES = new ArrayList<>();
  private static final int DAY_OF_MONTH = 28;
  private static final int YEAR = 2109;
  private static final Month MONTH = Month.APRIL;
  private static final String COLOR_TITLE = "color title";
  private static final String COLOR_ID = "1";
  private static final int ONE_INTENSITY = 1;

  @Mock
  private TopicService topicService;

  @Mock
  private HabitCalendarRepository habitCalendarRepository;

  @Mock
  private DateUtils dateUtils;

  @InjectMocks
  private HabitService habitService;

  @Test
  public void notExistingHabitWhenLoginHabitThenReturnEmptyList() {
    // given
    when(topicService.getTopic(TOPIC_ID)).thenReturn(Optional.empty());

    // when
    Optional<Day> response = habitService.logHabit(TOPIC_ID);

    // then
    assertFalse(response.isPresent());
  }

  @Test
  public void secondHabitOccurrenceInTheDayWhenLoginHabitThenLog() {
    // given
    Topic topic = Topic.builder()
            .title(TITLE)
            .id(ID)
            .completed(COMPLETED)
            .resources(EMPTY_RESOURCES)
            .level(LEVEL)
            .colorId(COLOR_ID)
            .title(COLOR_TITLE)
            .build();
    when(topicService.getTopic(TOPIC_ID)).thenReturn(Optional.of(topic));
    when(dateUtils.getDate()).thenReturn(Date.builder()
            .dayOfMonth(DAY_OF_MONTH)
            .month(MONTH)
            .year(YEAR)
            .build());

    Day dayWithOneOccurrence = mock(Day.class);
    when(habitCalendarRepository.findDay(YEAR, MONTH, DAY_OF_MONTH)).thenReturn(Optional.of(dayWithOneOccurrence));

    // when
    Day response = habitService.logHabit(TOPIC_ID).get();

    // then
    verify(dayWithOneOccurrence, times(1)).addHabitExecuted(COLOR_ID, COLOR_TITLE);
    verify(habitCalendarRepository, times(1)).save(dayWithOneOccurrence);
    assertSame(dayWithOneOccurrence, response);
  }

  @Test
  public void firstHabitOccurrenceInTheDayWhenLoginHabitThenLogInNewDay() {
    // given
    Topic topic = Topic.builder()
            .title(TITLE)
            .id(ID)
            .completed(COMPLETED)
            .resources(EMPTY_RESOURCES)
            .level(LEVEL)
            .colorId(COLOR_ID)
            .title(COLOR_TITLE)
            .build();
    when(topicService.getTopic(TOPIC_ID)).thenReturn(Optional.of(topic));
    when(dateUtils.getDate()).thenReturn(Date.builder()
            .dayOfMonth(DAY_OF_MONTH)
            .month(MONTH)
            .year(YEAR)
            .build());

    when(habitCalendarRepository.findDay(YEAR, MONTH, DAY_OF_MONTH)).thenReturn(Optional.empty());

    // when
    Day response = habitService.logHabit(TOPIC_ID).get();

    // then
    assertThat(response.getDay()).isEqualTo(DAY_OF_MONTH);
    assertThat(response.getYear()).isEqualTo(YEAR);
    assertThat(response.getMonth()).isEqualTo(MONTH);
    assertThat(response.getHabitsExecuted())
            .hasSize(1)
            .containsExactlyInAnyOrder(
                    DayHabit.builder()
                            .intensity(1)
                            .colorTitle(new HashSet(Collections.singletonList(COLOR_TITLE)))
                            .colorId(COLOR_ID)
                            .build()
            );
    verify(habitCalendarRepository, times(1)).save(response);
  }
}