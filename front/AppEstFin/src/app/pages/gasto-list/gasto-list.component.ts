import { Component } from '@angular/core';
import { GastoService } from '../../servicios/gasto.service';
import { Gasto } from '../../models/gasto.model';

@Component({
  selector: 'app-gasto-list',
  standalone: true,
  templateUrl: './gasto-list.component.html'
})



export class GastoListComponent {
  gastos: Gasto[] = [];

  constructor(
    private gastoService: GastoService
  ) {}


  ngOnInit(): void {
    this.gastoService.obtenerGastos().subscribe({
      next: (data) => {
        this.gastos = data;
      },
      error: (error) => { 
        console.error('Error al obtener los gastos:', error);
      }
    });
  }


  verDetalle(id: number) {
    this.gastoService.obtenerDetalle(id).subscribe((data: any) => {
      console.log(data);
      
      // renderizar gasto-detail.component.html con la información obtenida
      
      navigation.navigate(['/gasto-detail', id], { state: { gasto: data } });

    });
  }

}