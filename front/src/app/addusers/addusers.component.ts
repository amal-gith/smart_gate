import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Conservez uniquement les importations nécessaires
@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css'],
})
export class AddusersComponent implements OnInit  {
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
