import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { FirebaseResolver } from "app/core/firebase.resolver";
import { AuthService } from "app/core/auth/auth.service";
import { Http } from "@angular/http";
import * as firebase from "firebase";
import { Pizzeria } from "app/data/models/pizzeria.model";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class DataService implements Resolve<Pizzeria[]>{
  pizzerie: Pizzeria[] = [];
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pizzeria[] | Observable<Pizzeria[]> | Promise<Pizzeria[]> {
    console.log("Resolving pizzerie...");
    return Observable.fromPromise(<Promise<Pizzeria[]>>
      this.database.ref('pizzerie').once('value',
        (snapshot: firebase.database.DataSnapshot) => {
          console.log(snapshot.val());
          this.pizzerie = [];
          snapshot.forEach((childSnapshot: firebase.database.DataSnapshot) => {
            this.pizzerie.push(childSnapshot.val());
            return false;
          })
          console.log("Resolved, there are " + this.pizzerie.length + " pizzerie");
          return true;
        }));
  }

  private database = firebase.database();

  constructor(private http: Http, private authService: AuthService) { }

  insertOrUpdatePizzeria(pizzeria: Pizzeria) {
    this.database.ref('pizzerie')
      .once('value'
      , (snapshot: firebase.database.DataSnapshot) => {
        let found = false;
        snapshot.forEach((childSnapshot: firebase.database.DataSnapshot) => {
          let pizzeriaData = childSnapshot.val();
          if (pizzeria.equals(pizzeriaData)) {
            this.updatePizzeria(childSnapshot.key, pizzeria);
            found = true;
          }
          return found;
        });
        if (!found)
          this.insertPizzeria(pizzeria);
        return true;
      });
  }

  private insertPizzeria(pizzeria: Pizzeria): firebase.database.ThenableReference {
    console.log("Inserting pizzeria");
    console.log(pizzeria);
    return this.database.ref('pizzerie').push(pizzeria,
      (a: Error) => {
        if (a)
          console.log(a);
      });
  }

  private updatePizzeria(key: string, pizzeria: Pizzeria): firebase.Promise<any> {
    console.log("Updating pizzeria");
    console.log(pizzeria);
    return this.database.ref('pizzerie').child(key).set(pizzeria,
      (a: Error) => {
        if (a)
          console.log(a);
      });
  }

  getPizzerie(): Pizzeria[] {
    return this.pizzerie;
  }
}