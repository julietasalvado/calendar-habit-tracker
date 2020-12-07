package com.calendar.habittracker.services;

import com.calendar.habittracker.model.AddBookRequest;
import com.calendar.habittracker.model.Book;
import com.calendar.habittracker.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BookService implements IBookService {
    private final BookRepository bookRepository;

    @Override
    public void addBook(AddBookRequest request) {
        Book book = Book.builder()
                .title(request.getTitle())
                .numParts(request.getNumParts())
                .build();
        bookRepository.save(book);
    }
}
