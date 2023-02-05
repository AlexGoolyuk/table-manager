import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from 'src/app/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  _backAdress: string = "https://localhost:7038/";
  _baseURL: string = "api/Books";
  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(this._backAdress + this._baseURL+"/GetBooks");
  }
}