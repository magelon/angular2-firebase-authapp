import { Component, OnInit } from '@angular/core';

//import before using
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import {Router} from '@angular/router';
import {moveIn,fallIn} from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations:[moveIn(),fallIn()],
  host:{'[@moveIn]':''}
})
export class SignupComponent implements OnInit {

  state:string='';
  error:any;
  email:string;
  password:string;

  constructor(public af:AngularFireAuth,private router:Router){
    this.af.authState.subscribe(auth=>{
      if(auth){
        this.router.navigateByUrl('/members');  
      }
    }); 
  }


    onSubmit(formData){
      if(formData.valid){
        console.log(formData.value);
        this.af.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        ).then((success)=>{
          console.log(success);
          this.router.navigate(['/members'])
        }).catch((err)=>{
         
          this.error=err;
        })
        
/*
        this.af.auth.createUserWithEmailAndPassword({
          email:formData.value.email,
          password:formData.value.password
        }).then((success)=>{
          console.log(success);
          this.router.navigate(['/members'])
        }).catch((err)=>{
         
          this.error=err;
        })
      */ 
      }

    }

  ngOnInit() {
  }

}
