// medecins-par-centre.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medecin } from '../medecin.model';
import { CentreService } from '../centre.service';

@Component({
  selector: 'app-medecins-par-centre',
  templateUrl: './medecins-par-centre.component.html',
  styleUrls: ['./medecins-par-centre.component.css']
})
export class MedecinsParCentreComponent implements OnInit {
  centreId!: number;

  medecins: Medecin[] = [];
  nouvelMedecin: Medecin = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    centre: { id: 0 }
  };

  constructor(private centreService: CentreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.centreId = +params['id'];
      if (isNaN(this.centreId)) {
        console.error('ID du centre invalide.');
      } else {
        this.loadMedecins();
      }
    });
  }

  medecinEnModification: Medecin | null = null;

  afficherFormulaireCreation = false;

  loadMedecins(): void {
    this.centreService.getMedecinsByCentreId(this.centreId).subscribe(
      (data: Medecin[]) => {
        this.medecins = data;
        this.nouvelMedecin.centre!.id = this.centreId;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des médecins :', error);
      }
    );
  }

  creerMedecin(): void {
    this.centreService.creerMedecin(this.nouvelMedecin).subscribe(
      (medecinCree: Medecin) => {
        console.log('Medecin créé avec succès :', medecinCree);
        this.medecins.push(medecinCree);
        this.nouvelMedecin = {
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
        console.error('Erreur lors de la création du medecin :', error);
      }
    );
  }
  
  effacerMedecin(medecin: Medecin): void {
    if (confirm(`Voulez-vous vraiment effacer le medecin ${medecin.nom} ${medecin.prenom}?`)) {
      this.centreService.effacerMedecin(medecin.id).subscribe(
        () => {
          this.medecins = this.medecins.filter(a => a.id !== medecin.id);
        },
        (error: any) => {
          console.error('Erreur lors de la suppression du medecin :', error);
        }
      );
    }
  }

  modifierMedecin(medecin: Medecin): void {
    if (medecin) {
      this.medecinEnModification = { ...medecin };
      if (!this.medecinEnModification.centre) {
        this.medecinEnModification.centre = { id: this.centreId };
      } else {
        this.medecinEnModification.centre.id = this.centreId;
      }
      console.log('this.medecinEnModification est défini:', this.medecinEnModification);
      console.log('this.centreId:', this.centreId);
    } else {
      console.error('Le medecin à modifier est undefined.');
    }
  }

  soumettreModification(): void {
    if (this.medecinEnModification) {
      this.centreService.modifierMedecin(this.medecinEnModification.id, this.medecinEnModification).subscribe(
        (medecinModifie: Medecin) => {
          console.log('Medecin modifié avec succès :', medecinModifie);
          
          // Mettez à jour l'administrateur dans la liste administrateurs
          const index = this.medecins.findIndex(a => a.id === medecinModifie.id);
          if (index !== -1) {
            this.medecins[index] = medecinModifie;
          }
          this.medecinEnModification = null; // Effacer le formulaire de modification
        },
        (error: any) => {
          console.error('Erreur lors de la modification du medecin :', error);
        }
      );
    } else {
      console.error('Le medecin en modification est undefined.');
    }
  }

  afficherFormulaireCreationMedecin(): void {
    this.afficherFormulaireCreation = true;
  }

}
