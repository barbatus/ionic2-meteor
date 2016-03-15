'use strict';

import {Page} from 'ionic/ionic';

import {Control, FormBuilder, ControlGroup, Validators} from 'angular2/common';

import {AccountsService, InjectUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

@Page({
  templateUrl: '/client/login/login.html',
  providers: [AccountsService]
})
@InjectUser()
export class Login extends MeteorComponent {
  accountForm: ControlGroup;
  user: Meteor.User;
  private _accounts: AccountsService;

  constructor(accounts: AccountsService) {
    super();
    this._accounts = accounts;
    var fb = new FormBuilder()
    this.accountForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  submit(event,register) {
      register ? this.signup(event):this.login(event)
  }
  signup(event) {
    event.preventDefault();

    if (this.accountForm.valid) { 
      var account = this.accountForm.value;
      //the register function fails to cast args into AccountDetails, 
      //a json with username and password properties must be passed in order for the function to work:
      this._accounts.register(account)
      .then(this.clearForm())
        .catch(err => {
          alert(err);
        });
    }
  }
  login(event) {
    event.preventDefault();

    if (this.accountForm.valid) {
      var account = this.accountForm.value;
      this._accounts.login(account.username, account.password)
        .then(this.clearForm())
        .catch(err => {
          alert(err);
        });
    }
  }

  logout() {
    this._accounts.logout();
  }
  clearForm() {
          (<Control>this.accountForm.controls['username']).updateValue('');
          (<Control>this.accountForm.controls['password']).updateValue('');
          }
      
}
