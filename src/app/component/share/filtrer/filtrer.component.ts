import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/Service/heroes.service';

@Component({
  selector: 'app-filtrer',
  templateUrl: './filtrer.component.html',
})
export class FiltrerComponent implements OnInit {
  @Input() heroe:any={}
  heroes: any[] = [];
  name: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _service: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.name = params['name'];

      this.heroes = this._service.search(params['name']);
    });
  }
}
