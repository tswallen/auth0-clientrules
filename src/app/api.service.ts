import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  ping$(): Observable<any> {
    return this.http.get('/api/external');
  }

  getClients(): Promise<any> {
    return this.http.get('/api/clients').pipe(first()).toPromise().catch(error => this.log(error));
  }

  getRules(): Promise<any> {
    return this.http.get('/api/rules').pipe(first()).toPromise().catch(error => this.log(error));
  }

  private log(error) {
    console.error(error);
    alert('There was an error');
  }

}
