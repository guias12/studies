import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../models/Moment';
import { Response } from '../models/Response';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments`;
  constructor(private http: HttpClient) {}

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  fetchMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  fetchMoment(id: number): Observable<Response<Moment>> {
    return this.http.get<Response<Moment>>(`${this.apiUrl}/${id}`);
  }

  deleteMoment(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateMoment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
