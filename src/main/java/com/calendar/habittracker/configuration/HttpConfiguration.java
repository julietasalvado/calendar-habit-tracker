package com.calendar.habittracker.configuration;

import com.calendar.habittracker.model.interceptor.Request;
import com.calendar.habittracker.model.interceptor.Response;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Objects;

@Slf4j
@AllArgsConstructor
public class HttpConfiguration  implements ClientHttpRequestInterceptor {

    private ObjectMapper objectMapper;

    @Override
    public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution)
            throws IOException {
        Long milliseconds = getMilliseconds();
        traceRequest(request, body);
        ClientHttpResponse response = null;
        try {
            response = execution.execute(request, body);
        } finally {
            milliseconds = getMilliseconds() - milliseconds;
            traceResponse(Objects.requireNonNull(response, "Empty response from " + request.getURI().getHost() +
                    request.getURI().getPath()), milliseconds);
        }
        return response;
    }

    private void traceRequest(HttpRequest request, byte[] body) throws IOException {
        Request json = new Request(request.getURI(), request.getMethod(), request.getHeaders(), body.length == 0 ? null
                : objectMapper.readValue(new String(body, StandardCharsets.UTF_8), Object.class));
        if (log.isInfoEnabled()) {
            log.info("Request: {}", objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(json));
        } else {
            log.error("Request: {}", objectMapper.writeValueAsString(json));
        }
    }

    private void traceResponse(ClientHttpResponse response, Long milliseconds) throws IOException {
        Object body = objectMapper.readValue(response.getBody(), Object.class);
        Response json = new Response(response.getStatusCode().value(), response.getStatusCode(), response.getHeaders(),
                body, milliseconds);
        if (log.isInfoEnabled()) {
            log.info("Response: {}", objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(json));
        } else {
            log.error("Response: {}", objectMapper.writeValueAsString(json));
        }
    }

    private Long getMilliseconds() {
        LocalDateTime dateTime = LocalDateTime.now();
        ZonedDateTime zdt = dateTime.atZone(ZoneId.systemDefault());
        return zdt.toInstant().toEpochMilli();
    }
}
