import { Component, OnInit } from '@angular/core';
import { CentreService } from '../centre.service';
import { Centre } from '../centre.model';

@Component({
  selector: 'app-liste-des-centres',
  templateUrl: './liste-des-centres.component.html',
  styleUrls: ['./liste-des-centres.component.css']
})
export class ListeDesCentresComponent implements OnInit {

  centres: Centre[] = [];
  afficherFormulaire = false; // Ajout d'une variable pour afficher/masquer le formulaire
  nouveauCentre: Centre = { nom: '', adresse: '', ville: '', inscriptions: [], administrateurs: [], medecins: [] };
  // Ajoutez une variable pour le centre en cours de modification
  centreEnModification: Centre | null = null;

  constructor(private centreService: CentreService) { }

  ngOnInit(): void {
    this.centreService.getAllCentres().subscribe(data => {
      this.centres = data;
    });
  }

  afficherFormulaireCreation(): void {
    this.afficherFormulaire = true;
  }

  creerCentre(): void {
    // Logique pour créer un centre
    this.centreService.creerCentre(this.nouveauCentre).subscribe((centreCree: Centre) => {
      // Gérer la réponse du service (centre créé)
      console.log('Centre créé avec succès :', centreCree);

      // Ajouter le centre créé à la liste des centres (si nécessaire)
      this.centres.push(centreCree);

      // Réinitialiser les données du formulaire
      this.nouveauCentre = { nom: '', adresse: '', ville: '', inscriptions: [], administrateurs: [], medecins: [] };
      
      // Masquer le formulaire
      this.afficherFormulaire = false;
    });
  }

  supprimerCentre(centre: Centre): void {
    if (centre.id !== undefined) {
      this.centreService.supprimerCentre(centre.id).subscribe(() => {
        // Filtrer le centre supprimé de la liste des centres
        this.centres = this.centres.filter(c => c.id !== centre.id);
      });
    } else {
      // Gérer le cas où centre.id est undefined
      console.error('ID du centre non défini.');
    }
  }
  modifierCentre(centre: Centre): void {
    this.centreEnModification = centre;
    // Initialiser le formulaire de modification avec les données du centre
    this.nouveauCentre = {
      nom: centre.nom,
      adresse: centre.adresse,
      ville: centre.ville,
      inscriptions: [], // Assurez-vous d'initialiser correctement les autres propriétés si nécessaire
      administrateurs: [],
      medecins: []
    };
  }
  
  soumettreModification(): void {
    if (this.centreEnModification) {
      if (this.centreEnModification.id !== undefined) {
        this.centreService.modifierCentre(this.centreEnModification.id, this.nouveauCentre).subscribe((centreModifie: Centre) => {
          console.log('Centre modifié avec succès :', centreModifie);
          const index = this.centres.findIndex(c => c.id === centreModifie.id);
          if (index !== -1) {
            this.centres[index] = centreModifie;
          }
          this.nouveauCentre = { nom: '', adresse: '', ville: '', inscriptions: [], administrateurs: [], medecins: [] };
          this.afficherFormulaire = false;
          this.centreEnModification = null;
        });
      } else {
        console.error('ID du centre non défini.');
      }
    }
  }
  
  
}



