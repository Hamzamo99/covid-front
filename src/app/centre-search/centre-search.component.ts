import { Component } from '@angular/core';
import { CentreService } from '../centre.service';
import { Centre } from '../centre.model';
import { Inscription } from '../inscription.model';

@Component({
  selector: 'app-centre-search',
  templateUrl: './centre-search.component.html',
  styleUrls: ['./centre-search.component.css']
})

export class CentreSearchComponent {
  ville: string = '';
  successMessage: string | null = null; // Message de succès pour la pop-up
  nomCentre: string = '';
  centres: Centre[] = [];
  inscriptionFormVisible: boolean = false;
  inscriptionData: Inscription = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateInscription: '',
    centre: { id: 0 }
  };

  constructor(private centreService: CentreService) {
    this.inscriptionData = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      dateInscription: '',
      centre: { id: 0 }
      };
    }

  showSuccessPopup(message: string) {
    this.successMessage = message;
  }

  closeSuccessPopup() {
    this.successMessage = null;
    }

  searchCentres() {
    this.centreService.getCentresByVille(this.ville)
      .subscribe(data => {
        this.centres = data;
      });
  }

  choisirCentre(centre: Centre) {
    // On affiche le formulaire
    this.inscriptionFormVisible = true;
  
    // Assurez-vous que centre et centre.id ne sont pas undefined
    if (centre && centre.id !== undefined) {
      // On initialise le centre sélectionné dans inscriptionData
      this.inscriptionData.centre!.id = centre.id;
  
      // Vérifiez si centre.nom est défini avant de l'assigner
      if (centre.nom !== undefined) {
        this.nomCentre = centre.nom;
      } else {
        // Si centre.nom est undefined, assurez-vous que nomCentre est vide
        this.nomCentre = '';
      }
    } else {
      // Si centre ou centre.id est undefined, assurez-vous que nomCentre est vide
      this.nomCentre = '';
    }
  }
  
  onSubmit() {
    this.centreService.inscrireUtilisateur(this.inscriptionData)
      .subscribe(
        (response) => {
          // Gérer la réponse de l'API (par exemple, afficher un message de succès)
          console.log('Inscription réussie !', response);
          this.showSuccessPopup('L\'inscription s\'est bien passée !'); // Afficher la pop-up de succès
        },
        (error) => {
          // Gérer les erreurs (par exemple, afficher un message d'erreur)
          console.error('Erreur lors de l\'inscription', error);
        }
      );

    // Réinitialisez le formulaire après soumission
    this.inscriptionFormVisible = false;
    this.inscriptionData = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      dateInscription: '',
      centre: { id: 0 }
    };
  }
}


