import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseURL from '../Helpers/helperURL';
import { JwtDTO } from '../Models/jwt-dto';
import { UserLogin } from '../Models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private localURL = `${baseURL}/authenticate/v1`;

  constructor(private readonly httpClient: HttpClient) { }

  public loginUser(userLogin: UserLogin): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(`${this.localURL}/login`, userLogin);
  }
}
