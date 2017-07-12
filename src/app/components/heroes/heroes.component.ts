import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  private heroes:any[]=[];
  constructor(private _heroesServicio:HeroesService,
              private router:Router
  ) {

   }

  ngOnInit() {
    this.heroes=this._heroesServicio.getHeroes();
    console.log(this.heroes);
  }
  getHereos(){
    return this.heroes;
  }

  VerMas(id:number){
    //console.log(id);
    this.router.navigate(['/heroe',id]);
  }

}
