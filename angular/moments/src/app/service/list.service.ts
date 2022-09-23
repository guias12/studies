import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Animal {
  name: string;
  type: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private API_URL = 'http://localhost:3000/animals';
  constructor(private http: HttpClient) {}

  remove(id: number) {
    console.log('calling service method');
    return this.http.delete<Animal>(`${this.API_URL}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.API_URL);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.API_URL}/${id}`);
  }
}
