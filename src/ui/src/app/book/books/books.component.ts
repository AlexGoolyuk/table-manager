import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/services/book.service';
import { NewBookComponent } from '../new-book/new-book.component';
import { ShowBookComponent } from '../show-book/show-book.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books!: Book[];

  constructor(private service: BookService, private router: Router, private dialog: MatDialog,
    private detectChanges: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.refresh();
  }

  getBooks(): Observable<Book[]> {
    return this.service.getAllBooks();
  }

  addClick(): void {
    const dialogRef = this.dialog.open(NewBookComponent);

    dialogRef.afterClosed().subscribe((result: Book) => {
      console.log(result);
      if (!!result) {
        this.service.addBook(result)
          .subscribe(() => {
            this.refresh();
          })
      }
    });
  }

  onShow(book: Book) {

    const dialogRef = this.dialog.open(ShowBookComponent, {
      data: book
    });

    dialogRef.afterClosed().subscribe((result?: FormGroup) => {
      console.log(result?.value);
      if (!!result) {
        this.service.updateBook(result?.value)
          .subscribe(() => {
            this.refresh();
          })
      }
    });
  }

  refresh() {
    this.service.getAllBooks().subscribe(data => {
      this.books = data;
      this.detectChanges.detectChanges();
    });
  }

  onDelete(id?: number) {

    //TODO: add dialog for confirmation
    this.service.deleteBook(id)
  }
}
