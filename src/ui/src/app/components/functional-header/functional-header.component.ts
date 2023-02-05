import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewBookComponent } from 'src/app/book/new-book/new-book.component';

@Component({
  selector: 'app-functional-header',
  templateUrl: './functional-header.component.html',
  styleUrls: ['./functional-header.component.scss']
})
export class FunctionalHeaderComponent {


  constructor(private router: Router, private dialog: MatDialog) { }

  addClick() : void {
    const dialogRef = this.dialog.open(NewBookComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  homeClick() {
    this.router.navigateByUrl('/home');
  };
}
