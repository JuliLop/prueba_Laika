import { Component } from '@angular/core';
import { Categoria } from './models/categoria.model';
import { CategoriasService } from './services/categorias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba_laika';
  categorias: Categoria[] = [];

  constructor(categoriaService: CategoriasService) {
    this.categorias = categoriaService.getCategorias();
  }
}

