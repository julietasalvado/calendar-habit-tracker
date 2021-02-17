package com.calendar.habittracker.model.interceptor;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

import java.net.URI;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Request {

    private URI uri;
    private HttpMethod method;
    private HttpHeaders headers;
    private Object body;

}