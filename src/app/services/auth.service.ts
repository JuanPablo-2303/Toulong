import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { async } from '@angular/core/testing';
import {User} from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged:any = false;
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user =>(this.isLogged = user));
   }

   //Login
   async onLogin(user:User) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
    } catch (error) {
      console.log('error on login',error);
    }
  }
    //register
    async onRegister (user:User) {
try {
  return await this.afAuth.auth.createUserWithEmailAndPassword(
    user.email,
    user.password
  );
} catch (error) {
  console.log('error on register',error);
}
    }
   }


