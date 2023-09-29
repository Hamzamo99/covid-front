// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Vérifiez les informations d'identification de l'utilisateur
    if (this.user.email === 'test' && this.user.password === 'test') {
      // Connexion réussie
      // Vous pouvez également gérer la connexion en utilisant un service d'authentification
      // Mettez à jour le statut de connexion et redirigez l'utilisateur vers une page appropriée
      // (par exemple, la page de profil)
      this.router.navigate(['/superadmin/centres']);
    } else {
      // Affichez un message d'erreur ou effectuez d'autres actions en cas d'échec de la connexion
    }
  }
}
