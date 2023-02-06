import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _baseURL: string = "https://localhost:7038/api/Users/";
  constructor(private http: HttpClient) { }
}
