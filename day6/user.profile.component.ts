import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from './authenticate.service'

@Component({
  templateUrl: `./user.profile.component.html`,
  styles : ['em{float:right; color: #E05c65; padding-left-10px;}']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private router: Router, private authenticteService: AuthenticateService) { }

  ngOnInit() {
    let firstName = new FormControl(this.authenticteService.currentUser.firstName,Validators.required);
    let lastName = new FormControl(this.authenticteService.currentUser.lastName,Validators.required);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  saveUser(formValues) {
    if (this.profileForm.valid) { 
    this.authenticteService.updateUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['/courses'])
  }
}

cancel()
{ this.router.navigate(['/courses']) }
}
//this.authenticteService.currentUser.firstName, Validators.required
//this.authenticteService.currentUser.lastName, Validators.required
