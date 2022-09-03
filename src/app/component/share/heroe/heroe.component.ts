import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/Service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']

})
export class HeroeComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(private _heroeService:HeroesService, private router: Router) { 

    
  }

  ngOnInit() {
    this.heroes = this._heroeService.getHeroes();
    console.log(this.heroes);
  }

  verHeroes(index:number){
    this.router.navigate(['/detallis',index]);
  }

}
