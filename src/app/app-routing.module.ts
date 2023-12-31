import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeDesCentresComponent } from './liste-des-centres/liste-des-centres.component';
import { CentreSearchComponent } from './centre-search/centre-search.component';
import { LoginComponent } from './login/login.component';
import { AdminsParCentreComponent } from './admins-par-centre/admins-par-centre.component';
import { MedecinsParCentreComponent } from './medecins-par-centre/medecins-par-centre.component';
import { ListeDesSuperAdminsComponent } from './liste-des-super-admins/liste-des-super-admins.component';
import { ListeInscriptionsCentreComponent } from './liste-inscriptions-centre/liste-inscriptions-centre.component';
import { MedecinSearchComponent } from './medecin-search/medecin-search.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'superadmins', component: ListeDesSuperAdminsComponent , canActivate :[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'administrateurs/centre/:id', component: AdminsParCentreComponent },
  { path: 'medecins/centre/:id', component: MedecinsParCentreComponent},
  ////////////////////////////////////////////////////////////////
  {
    path: 'centre/:id/inscriptions',
    component: ListeInscriptionsCentreComponent
  },
  {
    path: 'inscriptions/centre/:id',
    component: MedecinSearchComponent
  },
  { path: 'superadmin/centres',component: ListeDesCentresComponent },
  { path: 'public/centres',component: CentreSearchComponent },
  { path: '', redirectTo: 'public/centres', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
