package com.calendar.habittracker.services;

import com.calendar.habittracker.model.AddTopicRequest;
import com.calendar.habittracker.model.Topic;

import java.util.List;

public interface ITopicService {
  List<Topic> getAllTopics();
  List<Topic> getStartedTopics();
  void addTopic(AddTopicRequest request);
}
