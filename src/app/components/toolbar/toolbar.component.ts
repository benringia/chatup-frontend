import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenService} from './../../services/token.service';
import * as M from 'materialize-css';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: any;
  notifications = [];

  constructor(private tokenService: TokenService,private router: Router,private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.tokenService.GetPayload();
    console.log(this.user)

    const dropDownElement = document.querySelector('.dropdown-trigger');
    M.Dropdown.init(dropDownElement, {
      alignment: 'right',
      hover: true,
      coverTrigger: false
    });

    this.GetUser();
  }

  GetUser() {
    this.usersService.GetUserById(this.user._id).subscribe(data => {
      this.notifications = data.result.notifications.reverse();
    });
  }

  logout() {
    this.tokenService.DeleteToken();
    this.router.navigate(['']);
  }

  GoToHome() {
    this.router.navigate(['streams']);
  }

}
