import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';
import { FunctionalHeaderComponent } from '../../functional-header/functional-header.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  newUser: User = {};

  constructor(public dialogRef: MatDialogRef<FunctionalHeaderComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
