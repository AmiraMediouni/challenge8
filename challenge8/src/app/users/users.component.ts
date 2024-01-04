import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users:any=[]
  updt=false
  new_user:any={
    id:'',
    name:'',
    username:'',
    email:''

  }
  
  constructor( private _usersService:UserService){}
  
  ngOnInit(): void {
      this._usersService.getUsers()
        .subscribe(data => this.users=data)


        }
        deleteUser(use:any){
          this._usersService.deleteUser(use)
          .subscribe(()=>{
            this.users=this.users.filter
            ((user: { id: any; })=>user.id!=use.id)

          })

        }
        addUsers(){
          this._usersService.addUser(this.new_user)
          .subscribe((user)=>{
            this.users=[user, ...this.users]
          })
        }

        editUser(user:any){
          this.new_user=user
          this.updt=true

        }
        updateUser(){
          this._usersService.updateUser(this.new_user)
          .subscribe(data=>{
           this.updt=false
          })
        }
        


}
