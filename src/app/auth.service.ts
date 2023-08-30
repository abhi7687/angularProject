import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticate(username: string, password: string): Observable<any>{

    const isAuthenticated = username === 'validUser' && password === 'validPassword';

    if(isAuthenticated) {

      const userData = {
        userId: 1234,
      };
      return of(userData);
    } else {
      return of(null);
    }
  }

}
