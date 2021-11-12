import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthResponse } from './../models/auth-response';
import { LoginObject } from './../models/login-object.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( private http: HttpClient ) { }

  private baseUrl: string = environment.baseUrl;
  private _usuario!: LoginObject;

  get usuario() {
    return { ...this._usuario };
  }


  login( email: string, password: string ) {

    const url  = `${ this.baseUrl }/auth/login`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( (resp:AuthResponse) => {
          if ( resp.ok ) {
            this._usuario = resp.user;

            localStorage.setItem('token',`Bearer ${resp.token}`  );
          }
        }),
        map((resp:AuthResponse)=>resp.user),
        catchError( err => of(err.error.msg) )
      );
  }

  validarToken(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/refresh`;

    const headers = new HttpHeaders().set("Authorization",`${localStorage.getItem('token')}`);

    return this.http.post<AuthResponse>( url,null, { headers } )
        .pipe(
          map( (resp:any) => {
            localStorage.setItem('token',`Bearer ${resp.token}` );
            this._usuario = resp.user
            return resp.ok;
          }),
          catchError( err => of(false) )
        );

  }

  logout() {
    const url  = `${ this.baseUrl }/auth/logout`;

    const headers = new HttpHeaders().set("Authorization",`${localStorage.getItem('token')}`);

    this.http.post<any>( url,null, { headers }  );

    localStorage.clear();
  }

}
