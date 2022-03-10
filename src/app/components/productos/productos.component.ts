import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @Input() url: string = "" ;
  @Input() stars: string = "0";
  @Input() nombreProducto: string = "";
  @Input() precioNormal: string = "0";
  @Input() precioMember: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

  getStars(): any[] {
    if (this.stars === null || this.stars == "") {
      return [];
    }

    let startsNum = parseInt(this.stars);
    return new Array(startsNum).fill(1);
  }
}
