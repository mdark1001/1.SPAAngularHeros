import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
@Component({
  selector: 'app-horoe',
  templateUrl: './horoe.component.html',
  styles: []
})
export class HoroeComponent  {
  heroe:any={};
  constructor(private activateRouter:ActivatedRoute,
    private _heroesServicio:HeroesService,
    private router:Router
  ) {
      this.activateRouter.params.subscribe(params =>{
        console.log(params['id']);
        this.heroe=this._heroesServicio.getHeroe(params['id']);
    } );
    console.log(this.heroe);
   }
   regresar(){
      this.router.navigate(['/heroes']);
   }



}
