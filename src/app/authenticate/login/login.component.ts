import { AuthService } from './../auth.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User

  constructor(private authService: AuthService) {
    this.user = new User()
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.user)
  }
}
