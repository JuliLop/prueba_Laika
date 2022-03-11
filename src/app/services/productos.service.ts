import { Injectable } from '@angular/core';
import { Producto } from '../models/productos.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductosService {
  constructor(private cliente: HttpClient){}
  getProductos(): Observable<Producto[]> {
    return this.cliente.get<Producto[]>("http://localhost:3000/productos");
  }
}