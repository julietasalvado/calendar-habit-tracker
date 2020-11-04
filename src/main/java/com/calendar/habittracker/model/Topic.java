package com.calendar.habittracker.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "topics")
public class Topic {
  @Id
  private String id;
  private String title;
  private Integer level;
  private Integer completed;
}
