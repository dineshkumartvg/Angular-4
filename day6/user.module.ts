import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UserProfileComponent} from './userprofile.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserProfileComponent
    ],
  providers: [],
  })
export class UserModule { }
