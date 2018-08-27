import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular6-test';
  needsLogin: boolean = true;

  constructor(private authService: AuthService){}

  helloWorld() : string {
    return "Hello World";
  }


  ngOnInit(){
    this.authService.isAuthenticated().then((authenticated) => {
      this.needsLogin = !authenticated;
    });

  }

}
