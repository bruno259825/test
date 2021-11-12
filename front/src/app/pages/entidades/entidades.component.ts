import { Component, Inject, OnInit, Optional } from '@angular/core';
//import { MaddComponent } from 'src/app/modal/madd/madd.component';
import { Entidad } from 'src/app/models/entidades.model';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {

  entidades:Entidad[]=[];
  abrirMdel:boolean=false;
  abrirMedit:boolean=false;

  entidadSeleccionada:any;

  constructor(private entidadesService:EntidadesService
    ) { }

  ngOnInit(): void {
    this.listarEntidades();
  }

  editar(aceptar:boolean){
    this.abrirMedit=false;
  }

  eliminar(confirmar:boolean){
  
    if(confirmar){
      this.entidadesService.removeEntidad(this.entidadSeleccionada.id).subscribe(
          res=>{
            let index=this.entidades.findIndex(oEntidad=>oEntidad.id==this.entidadSeleccionada.id);
            if(index>=0){
              this.entidades.splice(index,1);
            }
          },
          e=>console.log
      );
    }
    this.abrirMdel=false;
  }

  openDialog(action:string,entidad:any){
 
    if(action=="edit"){

      this.abrirMedit=true;
      this.entidadSeleccionada=entidad;

    }else if(action=="del"){

      this.abrirMdel=true;
      this.entidadSeleccionada=entidad;

    }else if(action=="add"){
      
    }

  }

  listarEntidades(){
    this.entidadesService.getEntidades().subscribe((res:Entidad[])=>{
      this.entidades=res;
    });
  }

}
