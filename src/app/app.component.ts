import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-test';

  constructor(private authService: AuthService){}

  helloWorld() : string {
    return "Hello World";
  }

  needsLogin(): boolean {
    return !this.authService.isAuthenticated();
  }
}
