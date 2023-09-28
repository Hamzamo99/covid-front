import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Centre } from './centre.model';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  private apiUrl = '/api/superadmin/centres';

  constructor(private http: HttpClient) { }

  getAllCentres(): Observable<Centre[]> {
    return this.http.get<Centre[]>(this.apiUrl);
  }
  
}
