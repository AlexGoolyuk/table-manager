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
    @Inject(MAT_DIALOG_DATA) public bookIn: Book,) {}

  ngOnInit(): void {

    this.updateBookForm = this.fb.group({
      id: [this.bookIn.id],
      title: [this.bookIn.title, Validators.required],
      author: [this.bookIn.author, Validators.required],
      description: [this.bookIn.description, Validators.compose([Validators.required, Validators.minLength(5)])],
      rate: [this.bookIn.rate],
      dateStart: [this.bookIn.dateStart],
      dateRead: [this.bookIn.dateRead]
    })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
