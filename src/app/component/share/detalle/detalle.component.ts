import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HeroesService  } from "src/app/Service/heroes.service";
import { Routes } from '@angular/router';

export const routes: Routes = []


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',

})
export class DetalleComponent   {

 
  

  heroe:any={}
  constructor(private activeRoute:ActivatedRoute, private _heroe:HeroesService  ) {
    this.activeRoute.params.subscribe(params =>{
      console.log(params['id']);

      this.heroe = this._heroe.getHeroe(params['id']);

       
    });
 
 
  }

   

}
