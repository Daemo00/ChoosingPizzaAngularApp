import { Component, OnInit } from '@angular/core';
import { Pizzeria } from "app/data/models/pizzeria.model";
import { DataService } from "app/data/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pizzeria-list',
  templateUrl: './pizzeria-list.component.html',
  styleUrls: ['./pizzeria-list.component.css']
})
export class PizzeriaListComponent implements OnInit {

  pizzerie: Pizzeria[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    console.log(this.route.data);
    // this.pizzerie = this.route.data['pizzerie'];
  }

  ngOnInit() {
    this.pizzerie = this.dataService.getPizzerie();
  }
}