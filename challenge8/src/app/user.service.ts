import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Utilisateur } from './utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl : string =  'http://localhost:3000/users' 
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

  constructor(private http:HttpClient) { }
  getUsers():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.usersUrl)
                    
  }
  deleteUser (user: Utilisateur | number): Observable<Utilisateur[]>{ 
    const id = typeof user === 'number' ? user : user.id; 
    const url=this.usersUrl+'/'+id; 
    return this.http.delete<Utilisateur[]>(url);
  }
  addUser (user: Utilisateur): Observable<Utilisateur[]> {
     return this.http.post<Utilisateur[]>(this.usersUrl, user, this.httpOptions);
    }

  updateUser(user: Utilisateur | number): Observable<Utilisateur[]>{
    const id = typeof user === 'number' ? user : user.id;
    const url=this.usersUrl+'/'+id
    return this.http.put<Utilisateur[]>(url,user)

  }
  
}


