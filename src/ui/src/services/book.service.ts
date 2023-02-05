import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
    return this.http.post(this._baseURL+"/AddBook/", book)
    .subscribe(resp => {
      console.log(resp);
    });
  }
}