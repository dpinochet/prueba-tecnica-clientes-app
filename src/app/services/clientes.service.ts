import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getClientes(pageNumber: number, pageSize: number, useSP: boolean): Observable<any> {
    const endpoint = useSP ? 'sp' : 'ef';
    return this.http.get(`${this.apiUrl}/clientes/${endpoint}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
