package com.calendar.habittracker.controllers;

import com.calendar.habittracker.model.AddTopicRequest;
import com.calendar.habittracker.model.Topic;
import com.calendar.habittracker.services.TopicService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class TopicController implements ITopicController {
  
  private final TopicService topicService;
  
  @GetMapping("/topics")
  public List<Topic> getAllTopics() {
    return topicService.getAllTopics();
  }

  @GetMapping("/topics/started")
  public List<Topic> getStartedTopics() {
    return topicService.getStartedTopics();
  }

  @PostMapping("/topics")
  @ResponseBody
  public void addTopic(@RequestBody AddTopicRequest request) {
    topicService.addTopic(request);
  }
}