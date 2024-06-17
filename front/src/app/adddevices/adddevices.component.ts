import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adddevices',
  templateUrl: './adddevices.component.html',
  styleUrls: ['./adddevices.component.css']
})
export class AdddevicesComponent {
  userform: FormGroup;
  constructor() {
    this.userform = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required , Validators.maxLength(8)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      address: new FormControl('', [Validators.required])

    });
  }
  ngOnInit(): void {
    
  }

}
