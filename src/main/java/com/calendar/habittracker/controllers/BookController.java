package com.calendar.habittracker.controllers;

import com.calendar.habittracker.model.AddBookRequest;
import com.calendar.habittracker.model.Book;
import com.calendar.habittracker.services.BookService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Tag(name = "book", description = "the Book API")
public class BookController implements IBookController {
    private final BookService bookService;

    @PostMapping(value = "/books", produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public void addBook(@RequestBody AddBookRequest request) {
        bookService.addBook(request);
    }

    @GetMapping(value = "/books", produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }
}
