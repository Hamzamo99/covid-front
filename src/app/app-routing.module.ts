import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeDesCentresComponent } from './liste-des-centres/liste-des-centres.component';
import { CentreSearchComponent } from './centre-search/centre-search.component';

const routes: Routes = [
  { path: 'superadmin/centres',component: ListeDesCentresComponent },
  { path: 'public/centres',component: CentreSearchComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
