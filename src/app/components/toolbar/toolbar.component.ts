import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenService} from './../../services/token.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private tokenService: TokenService,private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.tokenService.DeleteToken();
    this.router.navigate(['']);
  }

}
