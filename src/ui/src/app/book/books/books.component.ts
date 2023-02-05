import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books!: Book[];

  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }

  getBooks(): Observable<Book[]> {
    return this.service.getAllBooks();
    console.log("Got books");
  }

}
