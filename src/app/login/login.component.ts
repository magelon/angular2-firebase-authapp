//adding hostbindng for route
import { Component, OnInit,HostBinding } from '@angular/core';
//import before using
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import {Router} from '@angular/router';
import {moveIn} from '../router.animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[moveIn()],
  host:{'[@moveIn]':''}
})
export class LoginComponent implements OnInit {

  
  //help prevent any firebase auth error
  error:any;
  constructor(public af:AngularFireAuth,private router:Router){
    this.af.authState.subscribe(auth=>{
      if(auth){
        this.router.navigateByUrl('/members');  
      }
    }); 
  }

  loginGoogle(){
      this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider(
      )).then(
        (success)=>{this.router.navigate(['/members'])}
      ).catch((err)=>{
        this.error=err;
      })
  }

  loginFb(){
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider(
    )).then(
      (success)=>{this.router.navigate(['/members'])}
    ).catch((err)=>{
      this.error=err;
    })
  }

  ngOnInit() {
  }

}
