import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CidadesEstadoService } from 'cidades-estado';
// import { CidadesEstadoService } from '../../../cidades-estado/src/lib/cidades-estado.service';
import { take } from 'rxjs/operators';

interface IEstado {
  ID: string;
  Sigla: string;
  Nome: string;
}

interface ICidade {
  id: number;
  nome: string,
  microrregiao: {
    id: number;
    nome: string;
    mesorregiao: {
      id: number;
      nome: string;
      UF: {
        id: number;
        sigla: string;
        nome: string;
        regiao: {
          id: number;
          sigla: string;
          nome: string;
        }
      }
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Estudo de Libs - Angular';

  estados: IEstado[] = [
    { "ID": "1", "Sigla": "AC", "Nome": "Acre" },
    { "ID": "2", "Sigla": "AL", "Nome": "Alagoas" },
    { "ID": "3", "Sigla": "AM", "Nome": "Amazonas" },
    { "ID": "4", "Sigla": "AP", "Nome": "Amapá" },
    { "ID": "5", "Sigla": "BA", "Nome": "Bahia" },
    { "ID": "6", "Sigla": "CE", "Nome": "Ceará" },
    { "ID": "7", "Sigla": "DF", "Nome": "Distrito Federal" },
    { "ID": "8", "Sigla": "ES", "Nome": "Espírito Santo" },
    { "ID": "9", "Sigla": "GO", "Nome": "Goiás" },
    { "ID": "10", "Sigla": "MA", "Nome": "Maranhão" },
    { "ID": "11", "Sigla": "MG", "Nome": "Minas Gerais" },
    { "ID": "12", "Sigla": "MS", "Nome": "Mato Grosso do Sul" },
    { "ID": "13", "Sigla": "MT", "Nome": "Mato Grosso" },
    { "ID": "14", "Sigla": "PA", "Nome": "Pará" },
    { "ID": "15", "Sigla": "PB", "Nome": "Paraíba" },
    { "ID": "16", "Sigla": "PE", "Nome": "Pernambuco" },
    { "ID": "17", "Sigla": "PI", "Nome": "Piauí" },
    { "ID": "18", "Sigla": "PR", "Nome": "Paraná" },
    { "ID": "19", "Sigla": "RJ", "Nome": "Rio de Janeiro" },
    { "ID": "20", "Sigla": "RN", "Nome": "Rio Grande do Norte" },
    { "ID": "21", "Sigla": "RO", "Nome": "Rondônia" },
    { "ID": "22", "Sigla": "RR", "Nome": "Roraima" },
    { "ID": "23", "Sigla": "RS", "Nome": "Rio Grande do Sul" },
    { "ID": "24", "Sigla": "SC", "Nome": "Santa Catarina" },
    { "ID": "25", "Sigla": "SE", "Nome": "Sergipe" },
    { "ID": "26", "Sigla": "SP", "Nome": "São Paulo" },
    { "ID": "27", "Sigla": "TO", "Nome": "Tocantins"}
  ];

  formEstados!: FormGroup;
  cidades!: ICidade[];

  constructor(
    private _formBuilder: FormBuilder,
    private _cidades: CidadesEstadoService
  ) {
    this._criaFrom();
    this._aoMudarSelect();
  }

  private _criaFrom(): void {
    this.formEstados = this._formBuilder.group({
      estados: ['1']
    });
  }

  private _aoMudarSelect(): void {
    this.formEstados.get('estados')?.valueChanges
      .subscribe(valor => {
        this._listaCidades(valor);
      })
  }

  private _listaCidades(estado: string): void {
    this._cidades.listaCidades(estado)
      .pipe(take(1))
      .subscribe((cidades: ICidade[]) => {
        this.cidades = cidades;
      })
  }

}
