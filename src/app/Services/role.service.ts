import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseURL from '../Helpers.ts/helperURL';
import { Role } from '../Models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private localURL = `${baseURL}/role/v1`;

  constructor(private readonly httpClient: HttpClient) { }

  public getListRole(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${this.localURL}/all`);
  }
}
