import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../Model/user-model';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-val-login',
  templateUrl: './val-login.component.html',
  styleUrls: ['./val-login.component.css']
})
export class ValLoginComponent implements OnInit {

  user: UserModel;
  invalidLogin: boolean;
  constructor(private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginResult(loggedInUser : UserModel) {

    if (loggedInUser.validLogin === true) {
      this.userService.setCurrentUserVal(loggedInUser);
      this.router.navigate(['/valuation']);
    }
    else {
      this.invalidLogin = true;
    }
  }

}
