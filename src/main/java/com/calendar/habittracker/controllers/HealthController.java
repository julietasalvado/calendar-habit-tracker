package com.calendar.habittracker.controllers;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collections;
import java.util.Map;

@Controller
@EnableAutoConfiguration
public class HealthController {
  @RequestMapping(value = "/health", method = RequestMethod.GET,
          produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public Map getHealth() {
    return Collections.singletonMap("response", "Healthy");
  }
}
