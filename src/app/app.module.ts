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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
