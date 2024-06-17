import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddusersComponent } from '../addusers/addusers.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private dialog: MatDialog) {}
  openAddUserDialog() {
    this.dialog.open(AddusersComponent, {
      width: '600px',
    });

}
}

