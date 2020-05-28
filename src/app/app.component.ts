import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UserModel } from './Model/user-model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from './loader-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedInUser: UserModel;
  title = 'PropDemos';
  showSpinner$: Observable<boolean>;

  constructor(
    private userService: UserService,
    private router: Router,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {

    this.userService.currentUser.subscribe((x) => {
 

        this.loggedInUser = x;
        this.router.navigate(['/valuation']);
      }
    
    

    );


    this.showSpinner$ = this.loaderService.loaderState;

  };

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }


}
