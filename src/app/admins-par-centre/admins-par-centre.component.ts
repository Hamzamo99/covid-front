import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentreService } from '../centre.service';

@Component({
  selector: 'app-admins-par-centre',
  templateUrl: './admins-par-centre.component.html',
  styleUrls: ['./admins-par-centre.component.css']
})
export class AdminsParCentreComponent implements OnInit {

  administrateurs: any[] = [];

  constructor(private centreService: CentreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtenez l'ID du centre à partir des paramètres de l'URL
    this.route.params.subscribe(params => {
      const centreId = +params['id']; // Assurez-vous que le paramètre 'id' est de type nombre
      if (!isNaN(centreId)) {
        // Utilisez le service pour obtenir les administrateurs du centre
        this.centreService.getAdminsByCentreId(centreId).subscribe(data => {
          this.administrateurs = data;
        });
      } else {
        console.error('ID du centre invalide.');
      }
    });
  }
}
