import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedor';
import { ProveedorService } from './services/proveedor.service';


import LiferayParams from '../types/LiferayParams'

declare const Liferay: any;

@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/list-provider/app/app.component.html'
})
export class AppComponent implements OnInit{
	proveedores: Proveedor[];
  constructor( private proveedorService: ProveedorService) { }

  ngOnInit(){
    this.proveedorService.getProveedores().subscribe( data => {
		//console.log('*****', JSON.stringify(data));
		this.proveedores = data;
	});
  }
}
