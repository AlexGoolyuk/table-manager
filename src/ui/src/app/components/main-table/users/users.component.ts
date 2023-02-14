import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AppState } from 'src/app/store/app.state';
import { UserReducer } from 'src/app/store/user.reducer';
import { UserService } from 'src/services/user.service';
import { ShowUserComponent } from '../show-user/show-user.component';
import {LoadUserAction, LoadUsersSuccessAction} from './../../../store/user.action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users!: User[];
  public users$!: Observable<any>;
  constructor(private store$: Store<AppState>,
    private service: UserService, 
    private router: Router, 
    private dialog: MatDialog) {
      this.users$ = this.store$.select('users');
    }

  ngOnInit(): void {
    // this.service.getAll().subscribe(data => {
    //   this.users = data;
    // });

    this.store$.dispatch(new LoadUserAction());
    this.users$.subscribe((state: AppState) => this.users = state.users)
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
