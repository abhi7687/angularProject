import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://localhost:3000';
  constructor(private http: HttpClient) { }

  getUserData(userId: number): Observable <any>{
    const url = `${this.baseUrl}/users/${userId}`;
    return this.http.get(url);
  }
}
