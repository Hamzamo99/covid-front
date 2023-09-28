import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeDesCentresComponent } from './liste-des-centres/liste-des-centres.component';

const routes: Routes = [
  { path: 'superadmin/centres',component: ListeDesCentresComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
