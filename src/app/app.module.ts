import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeDesCentresComponent } from './liste-des-centres/liste-des-centres.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CentreSearchComponent } from './centre-search/centre-search.component';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { LoginComponent } from './login/login.component';
import { AdminsParCentreComponent } from './admins-par-centre/admins-par-centre.component';
import { MedecinsParCentreComponent } from './medecins-par-centre/medecins-par-centre.component';
import { ListeDesSuperAdminsComponent } from './liste-des-super-admins/liste-des-super-admins.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDialogModule} from '@angular/material/dialog';
import { ListeInscriptionsCentreComponent } from './liste-inscriptions-centre/liste-inscriptions-centre.component';
import { MedecinSearchComponent } from './medecin-search/medecin-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeDesCentresComponent,
    CentreSearchComponent,
    SuccessPopupComponent,
    LoginComponent,
    AdminsParCentreComponent,
    MedecinsParCentreComponent,
    ListeDesSuperAdminsComponent,
    SuccessPopupComponent,
    ListeInscriptionsCentreComponent,
    MedecinSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
