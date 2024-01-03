import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Utilisateur } from './utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl : string =  'localhost:3000/users' 
  constructor(private http:HttpClient) { }
  getUsers():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.usersUrl)
                    
  }
  
}
