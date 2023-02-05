import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FunctionalHeaderComponent } from 'src/app/components/functional-header/functional-header.component';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {


  constructor(public dialogRef: MatDialogRef<FunctionalHeaderComponent>) {}


  onCancelClick(): void {
    this.dialogRef.close();
  }
}
