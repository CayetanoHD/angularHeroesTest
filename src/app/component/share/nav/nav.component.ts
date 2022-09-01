import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',

})
export class NavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(name:string){
    this.route.navigate(['/result',name]);

  }

}
