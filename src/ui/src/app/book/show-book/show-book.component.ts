import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  updateBookForm!: FormGroup;

  constructor(private service: BookService, private route: ActivatedRoute, private fb: FormBuilder,
    public dialogRef: MatDialogRef<BooksComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book,) {}

  ngOnInit(): void {
    // this.service.getBookById(this.route.snapshot.params['id'])
    // .subscribe(data => {
    //   this.book = data;
    // });

    this.updateBookForm = this.fb.group({
      id: [this.book.id],
      title: [this.book.title, Validators.required],
      author: [this.book.author, Validators.required],
      description: [this.book.description, Validators.compose([Validators.required, Validators.minLength(5)])],
      rate: [this.book.rate],
      dateStart: [this.book.dateStart],
      dateRead: [this.book.dateRead]
    })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
