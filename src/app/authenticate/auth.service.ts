import { User } from './../interfaces/user';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogged: User
  constructor(private router: Router) { 
    this.userLogged = new User()
  }

  public userIsLogged(){
    return  this.userLogged.email == 'admin' &&  this.userLogged.password == '123'
  }

  public login(user: User) {
    this.userLogged = user
    if (this.userIsLogged()) 
      this.redirect('/')
  }

  public logout() {
    this.userLogged = new User()
    this.redirect('login')
  }

  private redirect(url: string) {
    this.router.navigate([url])
  }
}
