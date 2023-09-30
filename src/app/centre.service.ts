import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Centre } from './centre.model';
import { Inscription } from './inscription.model';
import { Administrateur } from './administrateur.model'; // Importez le modèle d'administrateur

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  private apiUrl = '/api/superadmin/centres';
  private baseUrl = '/api/public/centres';
  private inscriptionUrl = '/api/public/inscriptions';
  private adminUrl = '/api/superadmin/administrateurs'; // URL pour les administrateurs

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

  // Méthode pour obtenir les administrateurs par ID de centre
  getAdminsByCentreId(centreId: number): Observable<Administrateur[]> {
    const url = `${this.adminUrl}/centre/${centreId}`;
    return this.http.get<Administrateur[]>(url);
  }

  // Méthode pour effectuer une inscription
  inscrireUtilisateur(inscriptionData: Inscription): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.inscriptionUrl, inscriptionData, { headers });
  }
  // centre.service.ts

  creerAdministrateur(nouvelAdministrateur: Administrateur): Observable<Administrateur> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Administrateur>('/api/superadmin/administrateurs', nouvelAdministrateur, { headers });
  }

  effacerAdministrateur(adminId: number): Observable<void> {
    const url = `${this.adminUrl}/${adminId}`; // Utilisez this.adminUrl pour la route des administrateurs
    return this.http.delete<void>(url);
  }

  modifierAdministrateur(id: number, administrateurModifie: Administrateur): Observable<Administrateur> {
    const url = `${this.adminUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    // Assurez-vous que le champ 'centre' est un objet avec une propriété 'id'
    administrateurModifie.centre = { id: administrateurModifie.centre.id };
  
    return this.http
      .put<Administrateur>(url, administrateurModifie, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Erreur lors de la modification de l\'administrateur :', error);
          return throwError(error);
        })
      );
  }
  
}


