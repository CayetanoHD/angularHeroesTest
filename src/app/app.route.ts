import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import   {BodyComponent} from './component/share/body/body.component';
import { AboutComponent } from './component/share/about/about.component';
import { HeroeComponent } from './component/share/heroe/heroe.component';
import {DetalleComponent} from './component/share/detalle/detalle.component';
import { FiltrerComponent} from './component/share/filtrer/filtrer.component';





const App_Routes: Routes =  [
   { path: 'home', component: BodyComponent},
   { path: 'about', component: AboutComponent},
   { path: 'heroes', component: HeroeComponent},
   { path: 'result/:name', component: FiltrerComponent},
   { path: 'detallis/:id', component: DetalleComponent},
   { path: '**', pathMatch: 'full', redirectTo:'none'}
];
export const App_Routing = RouterModule.forRoot(App_Routes,{useHash:true});

