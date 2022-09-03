import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import {App_Routing} from './app.route'
// Servicios
import { HeroesService } from "./Service/heroes.service";
//Componentes
import { AppComponent } from './app.component';
import { NavComponent } from './component/share/nav/nav.component';
import { FooterComponent } from './component/share/footer/footer.component';
import { BodyComponent } from './component/share/body/body.component';
import { HeroeComponent } from './component/share/heroe/heroe.component';
import { AboutComponent } from './component/share/about/about.component';
import { DetalleComponent } from './component/share/detalle/detalle.component';
import { FiltrerComponent } from './component/share/filtrer/filtrer.component';
import { HeroeTargetComponent } from './component/share/heroe-target/heroe-target.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    HeroeComponent,
    AboutComponent,
    DetalleComponent,
    FiltrerComponent,
    HeroeTargetComponent,
     
    
  ],
  imports: [
    BrowserModule,
    App_Routing
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
