package com.calendar.habittracker.controllers;

import com.calendar.habittracker.model.AddBookRequest;
import com.calendar.habittracker.services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BookController implements IBookController {
    private final BookService bookService;

    @PostMapping(value = "/books", produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public void addBook(@RequestBody AddBookRequest request) {
        bookService.addBook(request);
    }
}
