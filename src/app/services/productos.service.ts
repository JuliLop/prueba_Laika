import { Injectable } from '@angular/core';
import { Producto } from '../models/productos.model';

@Injectable()
export class ProductosService {
  getProductos(): Producto[] {
    return [
        { url: '../assets/img/hills_canine.jpg', nombreProducto: 'Hills Canine Treats Chicken', precioNormal: '16500', precioMember: '15000', stars: '5' },
        { url: '../assets/img/smathBones_unidad.png', nombreProducto: 'Smartbones unidad smartsticks dental', precioNormal: '3870', precioMember: '3655', stars: '4' },
        { url: '../assets/img/chunkygato.jpg', nombreProducto: 'Chunky Snacks Deli Caprichos Gatos Salmón', precioNormal: '3100', precioMember: '2635', stars: '5' },
        { url: '../assets/img/salvaje.jpg', nombreProducto: 'Salvaje Snacks Piel Y Pelaje', precioNormal: '3950', precioMember: '3358', stars: '3' },
        
    ];
  }
}
