import{CanActivate,Router} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import{Injectable} from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth:AngularFireAuth,private router:Router){}
            
    canActivate():Observable<boolean>{
        return Observable.from(this.auth.authState)
        .take(1)
        .map(state=>!!state)
        .do(authenticated=>{
            if(!authenticated)
                this.router.navigate(['/login']);
        })
    }

    

        }
