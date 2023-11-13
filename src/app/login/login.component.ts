// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
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

  onSubmit(): void {
    this.loginService.connect(this.user.nom, this.user.password).subscribe(value => {
      console.log("connecté");
      this.router.navigate(["superadmins"])
    });
  }
}
