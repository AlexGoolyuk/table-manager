import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/services/user.service';
import { ShowUserComponent } from '../show-user/show-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users!: User[];
  constructor(private service: UserService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.users = data;
    });
  }

  onShow(user: User) {

    const dialogRef = this.dialog.open(ShowUserComponent, {
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      console.log('The dialog was closed');
      this.service.update(result)
      .subscribe(res => {
        this.router.navigate(["/home"])
      });
    });
  }

  onDelete(id?: string) {

    //TODO: add dialog for confirmation
    this.service.delete(id)
  }

}
