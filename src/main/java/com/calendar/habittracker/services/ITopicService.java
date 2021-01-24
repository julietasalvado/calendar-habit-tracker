package com.calendar.habittracker.services;

import com.calendar.habittracker.model.AddTopicRequest;
import com.calendar.habittracker.model.Topic;

import java.util.List;
import java.util.Optional;

public interface ITopicService {
  List<Topic> getAllTopics();
  List<Topic> getStartedTopics();
  void addTopic(AddTopicRequest request);
  Optional<Topic> getTopic(String topicId);
}
