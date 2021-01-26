package com.calendar.habittracker.services;

import com.calendar.habittracker.model.AddTopicRequest;
import com.calendar.habittracker.model.Topic;
import com.calendar.habittracker.repository.TopicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class TopicService implements ITopicService {

  private final TopicRepository topicRepository;

  public List<Topic> getAllTopics() {
    return topicRepository.findAll();
  }

  public List<Topic> getStartedTopics() {
    return getAllTopics().stream()
            .filter(topic -> topic.getCompleted() != 0)
            .collect(Collectors.toList());
  }

  @Override
  public void addTopic(AddTopicRequest request) {
    Topic topic = Topic.builder()
            .title(request.getTitle())
            .build();
    topicRepository.save(topic);
  }

  @Override
  public Optional<Topic> getTopic(String topicId) {
    return topicRepository.findById(topicId);
  }
}
