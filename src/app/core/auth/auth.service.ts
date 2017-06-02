import * as firebase from "firebase";
import { Router } from "@angular/router";
import { Injectable, OnInit } from "@angular/core";
import { FirebaseResolver } from "app/core/firebase.resolver";

@Injectable()
export class AuthService {
    token: any;
    loggedIn = true;

    constructor(private router: Router, private firebaseResolver: FirebaseResolver) {
    }

    signupUser(email: string, password: string): firebase.Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
            // .catch(error => { console.log(error) });
    }

    signinUser(email: string, password: string): firebase.Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                if (response) { // response is undefined in case of unsuccessful login
                    this.getToken();
                    this.router.navigate(['/']);
                }
            });
    }

    signOut() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    getToken() {
        if (firebase.auth().currentUser)
            firebase.auth().currentUser.getIdToken().then(
                token => {
                    console.log("Aync assigned token is: " + token);
                    this.token = token
                }
            );
        console.log("Returned token is: " + this.token);
        return this.token; // possibility of getting an expired token
    }

    isAuthenticated() {
        if (this.token == null &&
            localStorage.length > 0 &&
            localStorage.getItem("firebase:authUser:" + FirebaseResolver.config.apiKey + ":[DEFAULT]")) {
            // Initialize Firebase
            this.firebaseResolver.resolve(null, null);
            var storedData = JSON.parse(
                localStorage.getItem("firebase:authUser:" + FirebaseResolver.config.apiKey + ":[DEFAULT]")
            );
            console.log("Data retrieved from local storage");
            console.log(storedData);
            this.token = storedData.stsTokenManager.accessToken;
        }
        return this.token != null;
    }
}