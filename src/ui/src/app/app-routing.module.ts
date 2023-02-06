import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './book/books/books.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/main-table/add-user/add-user.component';
import { DeleteUserComponent } from './components/main-table/delete-user/delete-user.component';
import { ShowUserComponent } from './components/main-table/show-user/show-user.component';
import { UpdateUserComponent } from './components/main-table/update-user/update-user.component';
import { UsersComponent } from './components/main-table/users/users.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: 'update-book/:id', component: UpdateBookComponent },
  { path: 'delete-book/:id', component: DeleteBookComponent },
  { path: 'show-book/:id', component: ShowBookComponent },
  { path: 'users', component: UsersComponent },
  { path: 'new-user', component: AddUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'delete-user/:id', component: DeleteUserComponent },
  { path: 'show-user/:id', component: ShowUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
