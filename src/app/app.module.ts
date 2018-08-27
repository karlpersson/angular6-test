import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyPipe } from './my.pipe';
import { LoginComponent } from './login/login.component';
import { HoverFocusDirective } from './hover-focus.directive';
import { TestHoverFocusComponent } from './test-hover-focus/test-hover-focus.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipe,
    LoginComponent,
    HoverFocusDirective,
    TestHoverFocusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
