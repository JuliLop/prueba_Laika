import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
@Injectable()
export class CategoriasService {
  getCategorias(): Categoria[] {
    return [
      { url: '../assets/img/categoria_alimento.png', nombre: 'Alimento' },
      { url: '../assets/img/categoria_snacks.png', nombre: 'Snacks' },
      { url: '../assets/img/categoria_farmacia.png', nombre: 'Farmapet' },
      { url: '../assets/img/categoria_higiene.png', nombre: 'Cuidado e Higiene'},
      { url: '../assets/img/categoria_juguetes.png', nombre: 'Juguetes'},
      { url: '../assets/img/categoria_accesorios.png', nombre: 'Accesorios'},
      { url: '../assets/img/categoria_petlover.png', nombre: 'PetLovers'},
      { url: '../assets/img/categoria_arenas.png', nombre: 'Arenas'},
    ];
  }
}
