import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseURL from '../Helpers/helperURL';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private localURL = `${baseURL}/user/v1`;

  constructor(private readonly httpClient: HttpClient) { }

  public registerUser(newUser: User): Observable<User> {
    return this.httpClient.post<User>(`${this.localURL}/register`, newUser);
  }

  public getListUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.localURL}/all`);
  }

  public getUserById(idUser: number): Observable<User> {
    return this.httpClient.get<User>(`${this.localURL}/${idUser}`);
  }

  public updateUser(updateUser: User) {
    return this.httpClient.put<User>(`${this.localURL}/update`, updateUser);
  }

  public deleteUserById(idUser: number): Observable<Object> {
    return this.httpClient.delete<User>(`${this.localURL}/delete/${idUser}`);
  }

}
