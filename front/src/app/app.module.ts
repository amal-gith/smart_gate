  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MatSlideToggleModule } from '@angular/material/slide-toggle';
  import { LoginComponent } from './login/login.component';
  import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AdddevicesComponent } from './adddevices/adddevices.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DevicesComponent } from './devices/devices.component';





  @NgModule({
    declarations: [
      AppComponent,
      UsersComponent,
      AddusersComponent,
      AdddevicesComponent,
      DevicesComponent,
      //DashboardComponent,
      //LoginComponent,
      

    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSlideToggleModule,
      DashboardComponent,
      ReactiveFormsModule,
      MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
