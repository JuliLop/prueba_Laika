import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';
@Injectable()
export class CategoriasService {
  constructor(private cliente:HttpClient){}
  getCategorias(): Observable<Categoria[]> {
    return this.cliente.get<Categoria[]>("http://localhost:3000/categorias");
  }
}
