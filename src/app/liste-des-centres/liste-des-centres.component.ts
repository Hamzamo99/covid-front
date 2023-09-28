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

  constructor(private centreService: CentreService) { }

  ngOnInit(): void {
    this.centreService.getAllCentres().subscribe(data => {
      this.centres = data;
    });
  }
}

