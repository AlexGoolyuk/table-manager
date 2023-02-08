import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/interfaces/book';
import { catchError, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _baseURL: string = "https://localhost:7038/api/Books";
  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(this._baseURL+"/GetBooks");
  }

  addBook(book: Book) {
    return this.http.post(this._baseURL+"/AddBook/", book);
  }

  getBookById(id: number) {
    return this.http.get<Book>(this._baseURL + "/GetBook/" + id);
  }

  updateBook(book: Book) {
    return this.http.put(this._baseURL + "/UpdateBook/" + book.id, book);
  }

  deleteBook(id?: number) {
    return this.http.delete(this._baseURL + "/DeleteBook/" + id);
  }
}