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

  creerCentre(nouveauCentre: Centre): Observable<Centre> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Centre>(this.apiUrl, nouveauCentre, { headers });
  }

  supprimerCentre(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
  modifierCentre(id: number, centre: Centre): Observable<Centre> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Centre>(url, centre, { headers });
  }

  // Méthode pour effectuer une inscription
  inscrireUtilisateur(inscriptionData: Inscription): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.inscriptionUrl, inscriptionData, { headers });
  }
}

