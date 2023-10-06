// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessPopupComponent } from '../success-popup/success-popup.component';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  user = {
    nom: '',
    password: ''
  };

  errorMessage: string | null = null;

  constructor(private router: Router,private dialog: MatDialog,private loginService: LoginService) {}

  // onSubmit() {
  //   // Vérifiez les informations d'identification de l'utilisateur
  //   if (this.user.email === 'super' && this.user.password === 'super') {
  //     // Connexion réussie
  //     // Vous pouvez également gérer la connexion en utilisant un service d'authentification
  //     // Mettez à jour le statut de connexion et redirigez l'utilisateur vers une page appropriée
  //     // (par exemple, la page de profil)
  //     this.router.navigate(['/superadmin/centres']);
  //   }
  //   else if (this.user.email === 'admin' && this.user.password === 'admin') {
  //     // Connexion réussie
  //     // Vous pouvez également gérer la connexion en utilisant un service d'authentification
  //     // Mettez à jour le statut de connexion et redirigez l'utilisateur vers une page appropriée
  //     // (par exemple, la page de profil)
  //     this.router.navigate(['medecins/centre/1']);
  //   } 
  //   else if (this.user.email === 'medecin' && this.user.password === 'medecin') {
  //     // Connexion réussie
  //     // Vous pouvez également gérer la connexion en utilisant un service d'authentification
  //     // Mettez à jour le statut de connexion et redirigez l'utilisateur vers une page appropriée
  //     // (par exemple, la page de profil)
  //     this.router.navigate(['inscriptions/centre/1']);
  //   }   
  //   else  {
  //     const errorMessage = "Mot de passe ou login incorrect";
    
  //     // Ouvrir la popup d'erreur avec le message d'erreur
  //     const dialogRef = this.dialog.open(SuccessPopupComponent, {
  //       data: { successMessage: errorMessage }
  //     });
    
  //     // Fermer la popup lorsque l'utilisateur clique sur "Fermer"
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('La popup d\'erreur a été fermée', result);
  //     });
  //   } 
  // }

  onSubmit(): void {
    this.loginService.connect(this.user.nom, this.user.password).subscribe(value => {
      console.log("connecté");
      this.router.navigate(["superadmins"])
    });
  }
}
