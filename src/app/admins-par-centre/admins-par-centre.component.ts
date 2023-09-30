import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentreService } from '../centre.service';
import { Administrateur } from '../administrateur.model';

@Component({
  selector: 'app-admins-par-centre',
  templateUrl: './admins-par-centre.component.html',
  styleUrls: ['./admins-par-centre.component.css']
})
export class AdminsParCentreComponent implements OnInit {
  centreId!: number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.centreId = +params['id'];
      console.log(this.centreId);
      if (isNaN(this.centreId)) {
        console.error('ID du centre invalide.');
      } else {
        this.loadAdmins();
      }
    });
  }

  administrateurs: Administrateur[] = [];
  nouvelAdministrateur: Administrateur = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    centre: { id: 0 } // Initialisez le centreId à 0 par défaut
  };

  administrateurEnModification: Administrateur | null = null;

  afficherFormulaireCreation = false;

  constructor(private centreService: CentreService, private route: ActivatedRoute) { }

  loadAdmins(): void {
    this.centreService.getAdminsByCentreId(this.centreId).subscribe(
      (data: Administrateur[]) => {
        this.administrateurs = data;
        this.nouvelAdministrateur.centre!.id = this.centreId;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des administrateurs :', error);
      }
    );
  }

  creerAdministrateur(): void {
    this.centreService.creerAdministrateur(this.nouvelAdministrateur).subscribe(
      (administrateurCree: Administrateur) => {
        console.log('Administrateur créé avec succès :', administrateurCree);
        this.administrateurs.push(administrateurCree);
        this.nouvelAdministrateur = {
          id: 0,
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          centre: { id: this.centreId }
        };
        this.afficherFormulaireCreation = false;
      },
      (error: any) => {
        console.error('Erreur lors de la création de l\'administrateur :', error);
      }
    );
  }

  effacerAdministrateur(admin: Administrateur): void {
    if (confirm(`Voulez-vous vraiment effacer l'administrateur ${admin.nom} ${admin.prenom}?`)) {
      this.centreService.effacerAdministrateur(admin.id).subscribe(
        () => {
          this.administrateurs = this.administrateurs.filter(a => a.id !== admin.id);
        },
        (error: any) => {
          console.error('Erreur lors de la suppression de l\'administrateur :', error);
        }
      );
    }
  }

  modifierAdministrateur(administrateur: Administrateur): void {
    if (administrateur) {
      this.administrateurEnModification = { ...administrateur };
      if (!this.administrateurEnModification.centre) {
        this.administrateurEnModification.centre = { id: this.centreId };
      } else {
        this.administrateurEnModification.centre.id = this.centreId;
      }
      console.log('this.administrateurEnModification est défini:', this.administrateurEnModification);
      console.log('this.centreId:', this.centreId);
    } else {
      console.error('L\'administrateur à modifier est undefined.');
    }
  }
  
  soumettreModification(): void {
    if (this.administrateurEnModification) {
      this.centreService.modifierAdministrateur(this.administrateurEnModification.id, this.administrateurEnModification).subscribe(
        (administrateurModifie: Administrateur) => {
          console.log('Administrateur modifié avec succès :', administrateurModifie);
          
          // Mettez à jour l'administrateur dans la liste administrateurs
          const index = this.administrateurs.findIndex(a => a.id === administrateurModifie.id);
          if (index !== -1) {
            this.administrateurs[index] = administrateurModifie;
          }
          this.administrateurEnModification = null; // Effacer le formulaire de modification
        },
        (error: any) => {
          console.error('Erreur lors de la modification de l\'administrateur :', error);
        }
      );
    } else {
      console.error('L\'administrateur en modification est undefined.');
    }
  }

  afficherFormulaireCreationAdministrateur(): void {
    this.afficherFormulaireCreation = true;
  }
}



