import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid-front';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Utilisez le service Router pour obtenir l'URL de la route actuelle
    const currentRoute = this.router.url;

    // Vérifiez si l'utilisateur est sur la route /login
    this.isLoggedIn = currentRoute !== '/login';
  }

  logout() {
    // Implémentez la logique de déconnexion ici
    // Par exemple, en utilisant un service d'authentification pour déconnecter l'utilisateur

    // Après la déconnexion, redirigez l'utilisateur vers la page de login
    this.router.navigate(['/login']);
  }
}

