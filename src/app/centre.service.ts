import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Centre } from './centre.model';
import { Inscription } from './inscription.model';
import { Administrateur } from './administrateur.model'; // Importez le modèle d'administrateur
import { Medecin } from './medecin.model';
import { SuperAdmin } from './superadmin.model';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  
  //////////////////////////////////////////////////////////////////////////////////////
  private inscriptionUrl = '/api/public/inscriptions'; //URl d'inscription des gens
  private medecinUrl = 'api/admin/administrateur/medecin'; //URL pour la gestion des medecins (CRU) par des administrateurs
  private superAdminCentreUrl = '/api/admin/superadmin/centre'; //URL pour la gestion des centres par les SuperAdmins
  private superAdminUrl = 'api/admin/superadmin'; //URL pour la gestion des SuperAdmins par les SuperAdmins
  private superAdminAdminUrl = 'api/admin/superadmin/administrateur'; //URL pour la gestion des Admins par les SuperAdmins
  private centreUrl = 'api/public/centres';

  private apiUrl = '/api/admin/administrateur';
  private inscUrl = '/api/admin/medecin'
  

  constructor(private http: HttpClient) { }

  getInscriptionsByNom(nom: string): Observable<Inscription[]> {
    const url = `${this.inscUrl}/rechercherPersonne?nom=${nom}`;
    return this.http.get<Inscription[]>(url);
  }

  // Méthode pour récupérer les inscriptions liées à un centre en utilisant l'ID du centre
  getInscriptionsByCentreId(centreId: number): Observable<Inscription[]> {
    const url = `api/admin/administrateur/inscription?centreId=${centreId}`; // Assurez-vous d'ajuster l'URL selon votre structure d'API
    return this.http.get<Inscription[]>(url);
  }
  // Méthode pour supprimer une inscription par son ID
  supprimerInscription(inscriptionId: number): Observable<void> {
    const url = `${this.apiUrl}/inscription/${inscriptionId}`;
    return this.http.delete<void>(url);
  }

  getAllCentres(): Observable<Centre[]> {
    return this.http.get<Centre[]>(this.superAdminCentreUrl);
  }

  getAllSuperAdmins(): Observable<SuperAdmin[]> {
    return this.http.get<SuperAdmin[]>(this.superAdminUrl);
  }

  getCentresByVille(ville: string): Observable<any[]> {
    const url = `${this.centreUrl}?ville=${ville}`;
    return this.http.get<any[]>(url);
  }

  creerCentre(nouveauCentre: Centre): Observable<Centre> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Centre>(this.superAdminCentreUrl, nouveauCentre, { headers });
  }

  creerSuperAdmin(nouveauSuperAdmin: SuperAdmin): Observable<SuperAdmin> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<SuperAdmin>(this.superAdminUrl, nouveauSuperAdmin, { headers });
  }

  supprimerCentre(id: number): Observable<void> {
    const url = `${this.superAdminCentreUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  supprimerSuperAdmin(id: number): Observable<void> {
    const url = `${this.superAdminUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  modifierCentre(id: number, centre: Centre): Observable<Centre> {
    const url = `${this.superAdminCentreUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Centre>(url, centre, { headers });
  }

  modifierSuperAdmin(id: number, superadmin: SuperAdmin): Observable<SuperAdmin> {
    const url = `${this.superAdminUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<SuperAdmin>(url, superadmin, { headers });
  }

  // Méthode pour obtenir les administrateurs par ID de centre
  getAdminsByCentreId(centreId: number): Observable<Administrateur[]> {
    const url = `${this.superAdminAdminUrl}/centre/${centreId}`;
    return this.http.get<Administrateur[]>(url);
  }

  getMedecinsByCentreId(centreId: number): Observable<Medecin[]> {
    const url = `${this.medecinUrl}?centreId=${centreId}`;
    return this.http.get<Medecin[]>(url);
  }

  // Méthode pour effectuer une inscription
  inscrireUtilisateur(inscriptionData: Inscription): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.inscriptionUrl, inscriptionData, { headers });
  }

  creerMedecin(nouvelMedecin: Medecin): Observable<Medecin> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Medecin>('api/admin/administrateur/medecin', nouvelMedecin, { headers });
  }

  creerAdministrateur(nouvelAdministrateur: Administrateur): Observable<Administrateur> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Administrateur>('/api/admin/superadmin/administrateur', nouvelAdministrateur, { headers });
  }

  effacerMedecin(medecinId: number): Observable<void> {
    const url = `${this.medecinUrl}/${medecinId}`; 
    return this.http.delete<void>(url);
  }

  effacerAdministrateur(adminId: number): Observable<void> {
    const url = `${this.superAdminAdminUrl}/${adminId}`; // Utilisez this.adminUrl pour la route des administrateurs
    return this.http.delete<void>(url);
  }

  modifierMedecin(id: number, medecinModifie: Medecin): Observable<Medecin> {
    const url = `${this.medecinUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    // Assurez-vous que le champ 'centre' est un objet avec une propriété 'id'
    medecinModifie.centre = { id: medecinModifie.centre.id };
  
    return this.http
      .put<Administrateur>(url, medecinModifie, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Erreur lors de la modification du medecin :', error);
          return throwError(error);
        })
      );
  }
  

  modifierAdministrateur(id: number, administrateurModifie: Administrateur): Observable<Administrateur> {
    const url = `${this.superAdminAdminUrl}/${id}`;
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


