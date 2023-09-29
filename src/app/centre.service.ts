import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Centre } from './centre.model';
import { Inscription } from './inscription.model';

@Injectable({
  providedIn: 'root'
})

export class CentreService {

  private apiUrl = '/api/superadmin/centres';
  private baseUrl = '/api/public/centres';
  private inscriptionUrl = '/api/public/inscriptions'; // URL pour l'inscription

  constructor(private http: HttpClient) { }

  getAllCentres(): Observable<Centre[]> {
    return this.http.get<Centre[]>(this.apiUrl);
  }

  getCentresByVille(ville: string): Observable<any[]> {
    const url = `${this.baseUrl}?ville=${ville}`;
    return this.http.get<any[]>(url);
  }

  // Méthode pour effectuer une inscription
  inscrireUtilisateur(inscriptionData: Inscription): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.inscriptionUrl, inscriptionData, { headers });
  }
}

