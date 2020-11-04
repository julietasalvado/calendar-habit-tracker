package com.calendar.habittracker.services;

import com.calendar.habittracker.model.Topic;
import com.calendar.habittracker.repository.TopicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class TopicService {

  private final TopicRepository topicRepository;

  public List<Topic> getAllTopics() {
    return topicRepository.findAll();
  }
}
