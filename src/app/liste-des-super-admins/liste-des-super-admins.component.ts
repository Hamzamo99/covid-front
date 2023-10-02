import { Component, OnInit } from '@angular/core';
import { SuperAdmin } from '../superadmin.model';
import { CentreService } from '../centre.service';

@Component({
  selector: 'app-liste-des-super-admins',
  templateUrl: './liste-des-super-admins.component.html',
  styleUrls: ['./liste-des-super-admins.component.css']
})
export class ListeDesSuperAdminsComponent implements OnInit {

  superAdmins: SuperAdmin[] = [];
  afficherFormulaire = false; // Ajout d'une variable pour afficher/masquer le formulaire
  nouveauSuperAdmin: SuperAdmin = { nom: '', prenom: '', email: '', telephone: ''};
  
  // Ajoutez une variable pour le superadmin en cours de modification
  superAdminEnModification: SuperAdmin | null = null;

  constructor(private centreService: CentreService) { }

  ngOnInit(): void {
    this.centreService.getAllSuperAdmins().subscribe(data => {
      this.superAdmins = data;
    });
  }

  afficherFormulaireCreation(): void {
    this.afficherFormulaire = true;
  }

  creerSuperAdmin(): void {
    // Logique pour créer un centre
    this.centreService.creerSuperAdmin(this.nouveauSuperAdmin).subscribe((superAdminCree: SuperAdmin) => {
      // Gérer la réponse du service (superAdmin créé)
      console.log('Super Admin créé avec succès :', superAdminCree);

      // Ajouter le centre créé à la liste des centres (si nécessaire)
      this.superAdmins.push(superAdminCree);

      // Réinitialiser les données du formulaire
      this.nouveauSuperAdmin = { nom: '', prenom: '', email: '', telephone: '' };
      
      // Masquer le formulaire
      this.afficherFormulaire = false;
    });
  }

  supprimerSuperAdmin(superAdmin: SuperAdmin): void {
    if (superAdmin.id !== undefined) {
      this.centreService.supprimerSuperAdmin(superAdmin.id).subscribe(() => {
        // Filtrer le centre supprimé de la liste des centres
        this.superAdmins = this.superAdmins.filter(c => c.id !== superAdmin.id);
      });
    } else {
      // Gérer le cas où centre.id est undefined
      console.error('ID du Super Admin non défini.');
    }
  }

  modifierSuperAdmin(superAdmin: SuperAdmin): void {
    this.superAdminEnModification = superAdmin;
    // Initialiser le formulaire de modification avec les données du centre
    this.nouveauSuperAdmin = {
      nom: superAdmin.nom,
      prenom: superAdmin.prenom,
      email: superAdmin.email,
      telephone: superAdmin.telephone, // Assurez-vous d'initialiser correctement les autres propriétés si nécessaire
    };
  }
  
  soumettreModification(): void {
    if (this.superAdminEnModification) {
      if (this.superAdminEnModification.id !== undefined) {
        this.centreService.modifierSuperAdmin(this.superAdminEnModification.id, this.nouveauSuperAdmin).subscribe((superAdminModifie: SuperAdmin) => {
          console.log('Super Admin modifié avec succès :', superAdminModifie);
          const index = this.superAdmins.findIndex(c => c.id === superAdminModifie.id);
          if (index !== -1) {
            this.superAdmins[index] = superAdminModifie;
          }
          this.nouveauSuperAdmin = { nom: '', prenom: '', email: '', telephone: ''};
          this.afficherFormulaire = false;
          this.superAdminEnModification = null;
        });
      } else {
        console.error('ID du centre non défini.');
      }
    }
  }
}
