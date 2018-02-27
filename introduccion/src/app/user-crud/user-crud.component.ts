import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  public user: User[];

  constructor(

    public UsersService: UsersService

  ) { }

  ngOnInit() {
    this.UsersService.getUsers().subscribe (users =>	{
      this.user = users;

    }
    )

  }

  remove(user: User){

  }

}
