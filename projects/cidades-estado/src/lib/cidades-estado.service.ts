import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CidadesEstadoService {

  constructor(private _http: HttpClient) { }

  public listaCidades(estado: string): Observable<Array<any>> {
    return this._http.get<Array<any>>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
      .pipe(
        take(1),
        map(resultado => resultado)
      )
  }
}
