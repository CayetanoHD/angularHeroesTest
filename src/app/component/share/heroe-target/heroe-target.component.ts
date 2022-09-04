import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {HeroesService  } from "src/app/Service/heroes.service";

@Component({
  selector: 'app-heroe-target',
  templateUrl: './heroe-target.component.html',

  
})
export class HeroeTargetComponent implements OnInit {

@Input() heroe:any={};
@Input() index:number =0;


  @Output() heroeSelected: EventEmitter<number>;



  constructor(private route:Router) {

    this.heroeSelected = new EventEmitter();
   }

  ngOnInit(): void {
  }
  verHeroe(){

  this.route.navigate(['/detallis', this.index])

  }

}
