import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute(): Observable<HttpEvent<any>> {
      switch (true) {
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        //case url.endsWith('/users') && method === 'GET':
        //  return getUsers();
        //case url.match(/\/users\/\d+$/) && method === 'GET':
        //  return getUserById();
        //case url.match(/\/users\/\d+$/) && method === 'DELETE':
        //  return deleteUser();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function register() {
      const user = body

      if (users.find(x => x.username === user.username)) {
        //return error('Username "' + user.username + '" is already taken')
        user.validLogin = false;
        return ok(user);
      }

      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      user.validLogin = true;
      return ok(user);
    };

    function authenticate() {
      const { username, password, validLogin } = body;
      // const user = users.find(x => x.username === username && x.password === password);
      const user = null;



      if (username != "Admin" && password != "KrishIs2019") {
        //   if (!user) {
        return ok({
          id: null,
          username: username,
          name: null,
          email: null,
          phone: null,
          validLogin: false,
          token: null
        });
      }
      return ok({
        id: "Admin",
        username: "Admin",
        name: "Admin",
        email: "",
        phone: "",
        validLogin: true,
        token: 'fake-jwt-token'
      })
      //return ok({
      //  id: user.id,
      //  username: user.username,
      //  name: user.name,
      //  email: user.email,
      //  phone: user.phone,
      //  validLogin: true,
      //  token: 'fake-jwt-token'
      //})
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
