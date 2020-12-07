package com.calendar.habittracker.controllers;

import com.calendar.habittracker.model.AddBookRequest;
import com.calendar.habittracker.model.Book;

import java.util.List;

public interface IBookController {
    void addBook(AddBookRequest request);
    List<Book> getAllBooks();
}
