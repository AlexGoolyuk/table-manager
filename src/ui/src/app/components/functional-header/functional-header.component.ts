import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewBookComponent } from 'src/app/book/new-book/new-book.component';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-functional-header',
  templateUrl: './functional-header.component.html',
  styleUrls: ['./functional-header.component.scss']
})
export class FunctionalHeaderComponent {


  constructor(private router: Router, private dialog: MatDialog, private service: BookService) { }

  addClick() : void {
    const dialogRef = this.dialog.open(NewBookComponent);

    dialogRef.afterClosed().subscribe((result: Book) => {
      console.log('The dialog was closed');

      this.service.addBook(result);
    });
  }
  homeClick() {
    this.router.navigateByUrl('/home');
  };
}
