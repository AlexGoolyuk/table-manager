import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/services/book.service';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.scss']
})
export class ShowBookComponent implements OnInit {

  constructor(private service: BookService, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<BooksComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book,) {}

  ngOnInit(): void {
    // this.service.getBookById(this.route.snapshot.params['id'])
    // .subscribe(data => {
    //   this.book = data;
    // });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
