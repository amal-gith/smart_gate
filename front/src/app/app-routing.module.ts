import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AdddevicesComponent } from './adddevices/adddevices.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  
 // {path:'',component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } ,
  {path: 'dashboard',component:DashboardComponent },
  {path: 'users',component:UsersComponent },
  {path:'addusers',component:AddusersComponent},
  {path:'adddevices',component:AdddevicesComponent},
  {path:'devices',component:DevicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
