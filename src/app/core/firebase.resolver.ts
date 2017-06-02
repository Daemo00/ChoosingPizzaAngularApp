import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import * as firebase from "firebase";

export class FirebaseResolver implements Resolve<firebase.app.App>{
    static config = {
        apiKey: "AIzaSyBuStViFP-UWZJowc5MWm50Oc-fTOxRkSU",
        authDomain: "choosing-pizza.firebaseapp.com",
        databaseURL: "https://choosing-pizza.firebaseio.com",
        projectId: "choosing-pizza",
        storageBucket: "choosing-pizza.appspot.com",
        messagingSenderId: "623360135735"
    };

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): firebase.app.App | Observable<firebase.app.App> | Promise<firebase.app.App> {
        if (!firebase.apps.length) {
            console.log("Initializing Firebase...");
            // Initialize Firebase
            return firebase.initializeApp(FirebaseResolver.config);
        }
    }
}