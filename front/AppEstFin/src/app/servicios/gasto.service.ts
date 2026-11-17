import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gasto } from '../models/gasto.model';

@Injectable({
    providedIn: 'root'
})

export class GastoService {

    private apiUrl ='https://localhost:7282/api/Estimacion';

    constructor(
        private http: HttpClient
    ) { }


    obtenerGastos() {
        return this.http.get<Gasto[]>(`${this.apiUrl}/ConsultarConsumo?id_usuario=0`);
    }


    obtenerDetalle(id: number) {
        return this.http.get(`${this.apiUrl}/ObtenerGasto?idGasto=${id}`);
    }
}
