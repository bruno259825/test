import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService{

  constructor(private http:HttpClient) { }

  public getEntidades(): Observable<any> {
      return this.http.get(`${environment.baseUrl}/entidades`).pipe(
        first(),
        map((obj:any)=>obj.data)
      );
      
  }

  public getEntidad(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/entidad/${id}`).pipe(first());
  }


  public removeEntidad(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/entidades/${id}`).pipe(first());
  }


}
