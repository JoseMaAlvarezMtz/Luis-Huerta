import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GastoService } from '../../servicios/gasto.service';
import { Gasto } from '../../models/gasto.model';

@Component({
  selector: 'app-gasto-detail',
  standalone: true,
  templateUrl: './gasto-detail.component.html'
})

export class GastoDetailComponent {

  
   @Input() gasto: Gasto | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private gastoService: GastoService
  ) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.gasto = this.route.snapshot.data['gasto'] ?? [{
      categoriaGasto: '',
      descripcion: '',
      fechaMovimiento: '',
      id: 0,
      monto: 0
    }];
  }
}
 