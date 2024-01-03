import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users:any=[]
  constructor( private _usersService:UserService ){}
  ngOnInit(): void {
      this._usersService.getUsers()
        .subscribe(data => this.users=data)
  }

}
