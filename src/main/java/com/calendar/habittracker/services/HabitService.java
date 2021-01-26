package com.calendar.habittracker.services;

import com.calendar.habittracker.model.Day;
import com.calendar.habittracker.model.Topic;
import com.calendar.habittracker.repository.HabitCalendarRepository;
import com.calendar.habittracker.utils.Date;
import com.calendar.habittracker.utils.DateUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class HabitService implements IHabitService {

  private final HabitCalendarRepository habitCalendarRepository;
  private final ITopicService topicService;
  private final DateUtils dateUtils;

  @Override
  public Optional<Day> logHabit(String topicId) {
    Optional<Topic> topicOpt = topicService.getTopic(topicId);
    if (!topicOpt.isPresent()) {
      return Optional.empty();
    }

    Topic topic = topicOpt.get();
    Date date = dateUtils.getDate();

    Optional<Day> dayOpt = habitCalendarRepository.findDay(
            date.getYear(),
            date.getMonth(),
            date.getDayOfMonth());
    Day day = dayOpt.map(value -> addHabitToExistingDay(value, topic)).orElseGet(() -> createDay(topic, date));
    habitCalendarRepository.save(day);
    return Optional.of(day);
    }

  private Day createDay(Topic topic, Date date) {
    return Day.builder()
            .firstHabitExecuted(topic.getColorId(), topic.getTitle())
            .year(date.getYear())
            .day(date.getDayOfMonth())
            .month(date.getMonth())
            .build();
  }

  private Day addHabitToExistingDay(Day day, Topic topic) {
    day.addHabitExecuted(topic.getColorId(), topic.getTitle());
    return day;
  }
}
