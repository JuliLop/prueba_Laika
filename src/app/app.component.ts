import { Component } from '@angular/core';
import { Categoria } from './models/categoria.model';
import { Producto } from './models/productos.model';
import { CategoriasService } from './services/categorias.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba_laika';
  categorias: Categoria[] = [];
  productos: Producto[] = [];

  constructor(categoriaService: CategoriasService, productoService: ProductosService) {
    categoriaService.getCategorias().subscribe(categorias =>  this.categorias = categorias);
    productoService.getProductos().subscribe(productos =>  this.productos = productos);
  
  }
}

