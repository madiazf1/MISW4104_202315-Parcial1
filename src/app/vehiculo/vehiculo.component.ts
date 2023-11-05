import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(){
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
        this.vehiculos = vehiculos;
      });
  }

  ngOnInit() {
    this.getVehiculos();
  }

  getTotalVehiculosMarca(marca: string): number {
      return this.vehiculos.filter(i => i.marca == marca).length;
  }

}
