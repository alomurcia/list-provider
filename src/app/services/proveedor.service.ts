import { Injectable } from '@angular/core';
//import { PROVEEDORES } from './proveedores.json';
import { Proveedor } from '../proveedor';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private urlEndPoint = 'https://liferaydev.subocol.com/o/provider/getProvider';
  constructor( public http: HttpClient) { }

 getProveedores(): Observable<Proveedor[]>{
  //  return of(PROVEEDORES);
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Proveedor[])
    );
  }
}
