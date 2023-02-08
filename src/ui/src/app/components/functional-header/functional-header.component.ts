import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/services/user.service';
import { AddUserComponent } from '../main-table/add-user/add-user.component';

@Component({
  selector: 'app-functional-header',
  templateUrl: './functional-header.component.html',
  styleUrls: ['./functional-header.component.scss']
})
export class FunctionalHeaderComponent {


  constructor(private router: Router, private dialog: MatDialog, private service: UserService) { }

  addClick(): void {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe((result: User) => {
      console.log('The dialog was closed');

      this.service.add(result);
    });
  }
  homeClick() {
    this.router.navigateByUrl('/home');
  };
  
}
