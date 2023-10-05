import { Component } from '@angular/core';
import { Medecin } from '../medecin.model';
import { CentreService } from '../centre.service';
import { Inscription } from '../inscription.model';

@Component({
  selector: 'app-medecin-search',
  templateUrl: './medecin-search.component.html',
  styleUrls: ['./medecin-search.component.css']
})

export class MedecinSearchComponent {
  nom: string = '';
  inscriptions: Inscription[] = [];

  constructor(private centreService: CentreService) {}

  searchPersonnes() {
    if (this.nom.trim() !== '') {
      this.centreService.getInscriptionsByNom(this.nom)
        .subscribe(data => {
          this.inscriptions = data;
        });
    } else {
      // Affichez un message d'erreur ou demandez à l'utilisateur de saisir un nom.
    }
  }
}
