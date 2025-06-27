import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithRedirect } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private readonly firebaseAuth = inject(Auth);

  constructor() {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      console.log('user status changed', user)
    })
  }


  async googleSignIn() {
    await signInWithRedirect(this.firebaseAuth, new GoogleAuthProvider())
      .then(response => {
        console.log('GOOGLE AUTH RESPONSE', response);
      })
      .catch(error => {
        console.log('GOOGLE AUTH ERROR',error)
      })
  }
}
