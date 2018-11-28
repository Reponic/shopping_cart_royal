import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  products: any;
  isLogged = true;

  constructor( private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

  registertoggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
