import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs'

export interface User {
  _id?: number;
  name: string;
  email: string;
  dob: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, user).pipe(
      catchError(error => {
        console.error('Error adding user:', error);
        return throwError(() => new Error('Failed to add user. Please try again.'));
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user._id}`, user);
  }

  deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${user._id}`);
  }

  
}
