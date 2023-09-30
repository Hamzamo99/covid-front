import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeDesCentresComponent } from './liste-des-centres/liste-des-centres.component';
import { CentreSearchComponent } from './centre-search/centre-search.component';
import { LoginComponent } from './login/login.component';
import { AdminMedecinsComponent } from './admin-medecins/admin-medecins.component';

const routes: Routes = [
  { path: 'superadmin/centres',component: ListeDesCentresComponent },
  { path: 'public/centres',component: CentreSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administrateurs/admin', component: AdminMedecinsComponent },
  { path: '', redirectTo: 'public/centres', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
