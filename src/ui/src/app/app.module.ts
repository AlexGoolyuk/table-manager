import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { FunctionalHeaderComponent } from './components/functional-header/functional-header.component';
import { WorkAreaComponent } from './components/work-area/work-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksComponent } from './book/books/books.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import { BookService } from 'src/services/book.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/main-table/users/users.component';
import { AddUserComponent } from './components/main-table/add-user/add-user.component';
import { DeleteUserComponent } from './components/main-table/delete-user/delete-user.component';
import { ShowUserComponent } from './components/main-table/show-user/show-user.component';
import { UpdateUserComponent } from './components/main-table/update-user/update-user.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FunctionalHeaderComponent,
    WorkAreaComponent,
    BooksComponent,
    DeleteBookComponent,
    NewBookComponent,
    ShowBookComponent,
    UpdateBookComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    AddUserComponent,
    DeleteUserComponent,
    ShowUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule,
    StoreModule.forFeature( 'appState', UserReducer),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
