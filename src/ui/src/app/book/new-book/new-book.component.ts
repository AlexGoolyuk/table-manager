import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FunctionalHeaderComponent } from 'src/app/components/functional-header/functional-header.component';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {

  newBook: Book = { id: Math.floor(Math.random() * 1000), title: '', author: '', description: '' };

  constructor(public dialogRef: MatDialogRef<FunctionalHeaderComponent>) { }


  onCancelClick(): void {
    this.dialogRef.close();
  }
}
