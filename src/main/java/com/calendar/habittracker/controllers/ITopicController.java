package com.calendar.habittracker.controllers;

import com.calendar.habittracker.model.AddTopicRequest;
import com.calendar.habittracker.model.Topic;

import java.util.List;

public interface ITopicController {
  List<Topic> getAllTopics();
  List<Topic> getStartedTopics();
  void addTopic(AddTopicRequest request);
}
