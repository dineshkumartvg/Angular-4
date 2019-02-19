import {  CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {UserProfileComponent} from './user.profile.component'
import {UserRoutingModule} from './user-routing.module'
@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
    ],
  providers : [],
  exports: [
    UserProfileComponent
  ]
 })
export class UserModule { }
