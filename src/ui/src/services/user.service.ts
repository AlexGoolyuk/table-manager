import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _baseURL: string = "https://localhost:7038/api/Users/";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this._baseURL + "GetAll/");
  }

  add(item: User) {
    return this.http.post(this._baseURL + "Add/", item)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  getById(id: string) {
    return this.http.get<User>(this._baseURL + "Get/" + id);
  }

  update(item: User) {
    return this.http.put(this._baseURL + "Update/" + item.id, item)
  }

  delete(id?: string) {
    return this.http.delete(this._baseURL + "Delete/" + id)
    .subscribe(resp => {
      console.log(resp);
    });
  }
}
