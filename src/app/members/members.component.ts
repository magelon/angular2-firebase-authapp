import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import {Router} from '@angular/router';
import {moveIn,fallIn,moveInLeft} from '../router.animations';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations:[moveIn(),fallIn(),moveInLeft()],
  host:{'[@moveIn]':''}
})
export class MembersComponent implements OnInit {

name:any;
state:string='';


constructor(public af:AngularFireAuth,private router:Router){
  this.af.authState.subscribe(auth=>{
    if(auth){
      //console.log(auth.displayName);
      this.name=auth.displayName;
    }
  });
 }

 logout(){
this.af.auth.signOut();
console.log('logged out');
this.router.navigateByUrl('/login');

 }
  ngOnInit() {
  }

}
