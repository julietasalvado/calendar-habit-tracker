package com.calendar.habittracker.services;

import com.calendar.habittracker.model.AddBookRequest;
import com.calendar.habittracker.model.Book;

import java.util.List;

public interface IBookService {
    void addBook(AddBookRequest request);
    List<Book> getAllBooks();
}
