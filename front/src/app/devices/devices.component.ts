import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdddevicesComponent } from '../adddevices/adddevices.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {
  constructor(private dialog: MatDialog) {}
  openAddUserDialog() {
    this.dialog.open(AdddevicesComponent, {
      width: '600px',
    });

}
}
