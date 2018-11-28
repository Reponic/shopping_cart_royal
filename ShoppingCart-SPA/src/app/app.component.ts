import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedApp = false;
  title = 'app';

  isLoggedIn(logged: boolean) {
    this.isLoggedApp = !this.isLoggedApp;
  }

}
