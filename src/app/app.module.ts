import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
//manully add forms and http module tidies
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { EmailComponent } from './email/email.component';

import {AuthGuard} from './auth.service';
import {routes} from './app.routes';

//add firebaseconfig for using
export const firebaseConfig={
  apiKey: "AIzaSyBL8RiRjGsIRTHubRzR85hlRkM22-wyUB4",
  authDomain: "shop-d7e2e.firebaseapp.com",
  databaseURL: "https://shop-d7e2e.firebaseio.com",
  projectId: "shop-d7e2e",
  storageBucket: "shop-d7e2e.appspot.com",
  messagingSenderId: "287848933518"

}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MembersComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,//imports module imported
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
