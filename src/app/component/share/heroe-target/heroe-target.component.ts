import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {HeroesService  } from "src/app/Service/heroes.service";

@Component({
  selector: 'app-heroe-target',
  templateUrl: './heroe-target.component.html',

  
})
export class HeroeTargetComponent implements OnInit {

@Input() heroe:any={};
@Input() index:number =0;



  constructor(private route: Router, _service:HeroesService) { }

  ngOnInit(): void {
  }
  verHeroes(){

console.log(this.index);
this.route.navigate(['/detallis',this.index]);

  }

}
