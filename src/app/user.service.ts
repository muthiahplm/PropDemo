import { Injectable } from '@angular/core';
import { UserModel } from './Model/user-model';
import { Observable, from, of, pipe, BehaviorSubject } from 'rxjs';
import {
  mergeMap, switchMap, retry,
  map, catchError, filter, scan, toArray, flatMap, mergeAll, concatAll, distinctUntilChanged
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserBehSub: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);
  public currentUser: Observable<UserModel> = this.currentUserBehSub.asObservable().pipe(distinctUntilChanged());

  constructor() { }

  public setCurrentUserVal(user: UserModel) {

    //this.currentUser =   this.currentUserBehSub.asObservable().pipe(distinctUntilChanged());

    this.currentUserBehSub.next(user);



  }
  public get CurrentUserVal() {

    return this.currentUserBehSub.value;
  }

  logout() {
    // remove user from local storage to log user out
   // localStorage.removeItem('currentUser');
    this.currentUserBehSub.next(null);
  }
}
