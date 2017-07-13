import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-filtro-heroe',
  templateUrl: './filtro-heroe.component.html',
  styles: []
})
export class FiltroHeroeComponent implements OnInit {
  private params_tern:string='';
  private heroes:any[]=[];
  constructor(private _heroesServicio:HeroesService,
              private activateRouter:ActivatedRoute,
              private router:Router) {
                this.activateRouter.params.subscribe(params =>{
                  this.params_tern=params['termino'];
                  console.log(params['termino']);
                  this.heroes=this._heroesServicio.buscarHeroe(this.params_tern);

              } );
              //console.log(this.heroe);
               }

  ngOnInit() {
    //console.log(this._heroesServicio.buscarHeroe(this.params_tern));


  }
  VerMas(id:number){
    //console.log(id);
    this.router.navigate(['/heroe',id]);
  }

}
