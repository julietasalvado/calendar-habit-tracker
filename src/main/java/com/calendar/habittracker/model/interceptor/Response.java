package com.calendar.habittracker.model.interceptor;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Response {

    private Integer statusCode;
    private HttpStatus statusText;
    private HttpHeaders headers;
    private Object body;
    private Long milliseconds;

}