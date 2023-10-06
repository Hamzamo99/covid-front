import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private isLoggedSubject: Subject<boolean> = new BehaviorSubject(false);
  private password?: string;
  private nom?: string;

  constructor(private httpClient: HttpClient) { }

  connect(nom: string, password: string): Observable<any> {
    let token = this.createToken(nom, password);
    let options = {
      headers: {
        'Authorization': token
      }
    };
    return this.httpClient.get<string>('/api/login/superadmin', options).pipe(map(value => {
      this.password = password;
      this.nom = nom;
      this.isLoggedSubject.next(true)
    }))
  }

  private createToken(nom?: string, password?: string) {
    let token = `Basic ` + btoa(`${nom}:${password}`);
    return token;
  }
  
  isLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  
}
