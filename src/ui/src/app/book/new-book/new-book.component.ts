import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { FunctionalHeaderComponent } from 'src/app/components/functional-header/functional-header.component';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {

  newBook: Book = { id: 0, title: '', author: '', description: '' };

  constructor(public dialogRef: MatDialogRef<FunctionalHeaderComponent>) {}


  onCancelClick(): void {
    this.dialogRef.close();
  }
}
