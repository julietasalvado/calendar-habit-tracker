package com.calendar.habittracker.model;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddBookRequest extends AddTopicRequest {
    private int numParts;
}
