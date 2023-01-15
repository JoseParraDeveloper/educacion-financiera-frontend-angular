import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseURL from '../Helpers/helperURL';
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

  public createRole(role: Role) {
    return this.httpClient.post<Role>(`${this.localURL}/create`, role);
  }

  public getRoleById(idRole: number): Observable<Role> {
    return this.httpClient.get<Role>(`${this.localURL}/${idRole}`);
  }

  public updateRole(role: Role) {
    return this.httpClient.put<Role>(`${this.localURL}/update`, role);
  }

  public deleteRoleById(idRole: number): Observable<Object> {
    return this.httpClient.delete<Role>(`${this.localURL}/delete/${idRole}`);
  }
}
