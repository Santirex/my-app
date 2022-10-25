import { Component, OnInit } from '@angular/core';
import {Book} from './books';
import {BookService} from '../register/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }
books : Book[] = [];

  ngOnInit(): void {

    this.bookService.searchAllBooks().subscribe(
                                      (data: Book[]) => {
                                        console.log(data);
                                        this.books = data;
                                      });

  }

searchBooksByEditorial(book: Book): Book[]{
  return this.books;
}

}
