package com.calendar.habittracker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "topics")
public class Topic {
  @Id
  private String id;
  private String title;
  private int level = 1;
  private int completed = 0;
  private List resources;
  private String colorId;

  public static Builder builder() {
    return new Builder();
  }

  public Builder toBuilder() {
    return new Builder().id(this.id).title(this.title).level(this.level).completed(this.completed).resources(this.resources);
  }

  public static class Builder {
    private String id;
    private String title;
    private int level;
    private int completed;
    private List resources;
    private String colorId;

    Builder() {
      this.level = 1;
    }

    public Builder id(String id) {
      this.id = id;
      return this;
    }

    public Builder title(String title) {
      this.title = title;
      return this;
    }

    public Builder level(int level) {
      this.level = level;
      return this;
    }

    public Builder completed(int completed) {
      this.completed = completed;
      return this;
    }

    public Builder resources(List resources) {
      this.resources = resources;
      return this;
    }

    public Builder colorId(String colorId) {
      this.colorId = colorId;
      return this;
    }

    public Topic build() {
      return new Topic(id, title, level, completed, resources, colorId);
    }

    public String toString() {
      return "Topic.Builder(id=" + this.id + ", title=" + this.title + ", level=" + this.level + ", completed=" + this.completed + ", resources=" + this.resources + ")";
    }
  }
}
