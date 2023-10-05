import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscription } from '../inscription.model'; // Assurez-vous d'importer votre modèle d'inscription approprié
import { CentreService } from '../centre.service';

@Component({
  selector: 'app-liste-inscriptions-centre',
  templateUrl: './liste-inscriptions-centre.component.html',
  styleUrls: ['./liste-inscriptions-centre.component.css']
})
export class ListeInscriptionsCentreComponent implements OnInit {
  centreId!: number;
  inscriptions: Inscription[] = [];

  constructor(private centreService: CentreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.centreId = +params['id'];
      if (isNaN(this.centreId)) {
        console.error('ID du centre invalide.');
      } else {
        this.loadInscriptionsByCentreId();
      }
    });
  }

  loadInscriptionsByCentreId(): void {
    // Appelez le service pour charger les inscriptions liées au centre en utilisant this.centreId
    // Assurez-vous que votre service CentreService dispose d'une méthode appropriée pour cela.
    this.centreService.getInscriptionsByCentreId(this.centreId).subscribe(
      (data: Inscription[]) => {
        this.inscriptions = data;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des inscriptions :', error);
      }
    );
  }
  
  supprimerInscription(inscription: Inscription): void {
    if (inscription) {
      // Appelez le service pour supprimer l'inscription en utilisant l'ID de l'inscription
      // Assurez-vous que votre service CentreService dispose d'une méthode appropriée pour cela.
      this.centreService.supprimerInscription(inscription.id).subscribe(
        () => {
          // Si la suppression réussit, retirez l'inscription de la liste
          const index = this.inscriptions.findIndex(i => i.id === inscription.id);
          if (index !== -1) {
            this.inscriptions.splice(index, 1);
          }
        },
        (error: any) => {
          console.error('Erreur lors de la suppression de l\'inscription :', error);
        }
      );
    } else {
      console.error('L\'inscription à supprimer est undefined.');
    }
  }
}

