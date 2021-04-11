import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './model/result';

@Injectable({
  providedIn: 'root',
})
export class FooBarQuixService {
  constructor(private http: HttpClient, private injector: Injector) {}
  public convertNumber(inputNumber: number): Observable<Result> {
    const serveur = this.injector.get('SERVER_URL');
    return this.http.get<Result>(serveur + '/foo-bar-quix/' + inputNumber);
  }
}
