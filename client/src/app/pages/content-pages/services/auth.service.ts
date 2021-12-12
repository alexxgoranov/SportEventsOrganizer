import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignUpBindModel } from '../models/sign-up.bind.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dataApi = environment.apiUrl;
  constructor(private httpService: HttpClient) {}

  signIn(data): Observable<any> {
    const url = `${this.dataApi}/auth/sign-in`;
    return this.httpService.post<any>(url, data);
  }

  signUp(data: SignUpBindModel): Observable<any> {
    const url = `${this.dataApi}/auth/sign-up`;
    return this.httpService.post<any>(url, data);
  }

}
