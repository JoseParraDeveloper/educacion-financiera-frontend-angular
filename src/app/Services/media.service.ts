import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private httpClient: HttpClient) { }

  uploadFile(formData: FormData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/media/upload', formData);

  }
}
