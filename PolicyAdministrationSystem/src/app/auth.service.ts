import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(
    public httpClient: HttpClient,
    private router: Router
  ) {

    // If the user is logged in, don't show the login page
    let token = localStorage.getItem('auth') ?? "";

    if (token?.length > 0) {
      this._isLoggedIn$.next(true);
    } else {
      this.router.navigate(['/login']);
    }
  }

  login(loginDetails: { userName: string, password: string }) {
    return this.httpClient.post(environment.authBaseURL, loginDetails)
      .pipe(
        tap((response: any) => {
          if (response?.token?.length > 0) {
            localStorage.setItem('auth', response.token);

            this._isLoggedIn$.next(true);
          }
        })
      );
  }

  logout() {
    try {
      localStorage.removeItem('auth');

      this._isLoggedIn$.next(false);

      this.router.navigate(['/login']);
    } catch (e: any) {
      console.log(e.message);
    }
  }
}
