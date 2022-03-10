import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  @Input() url: string = "" ;
  @Input() nombre: string = "";

  ngOnInit(): void {
  }

}
