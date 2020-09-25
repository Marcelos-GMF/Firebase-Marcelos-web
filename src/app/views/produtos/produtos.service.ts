import { ProdutoVO } from './../../model/vo/vo/produto.vo';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private BASE_URL: string = 'http://localhost:3001/produtos';

  constructor(private snackBar: MatSnackBar,
              private httpClient: HttpClient) { }

  showMessage(msg: string){
    this.snackBar.open(msg,
      'X', //Equivale ao fechamento da SnackBar  
      {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    });
  }

  // Metodo de criação de um novo produto.
  incluirProduto(produto: ProdutoVO): Observable<ProdutoVO>{
     return this.httpClient.post<ProdutoVO>(this.BASE_URL, produto);
  }

  // Ler os arquivos da aplicação
  read(): Observable<ProdutoVO[]>{
    return this.httpClient.get<ProdutoVO[]>(this.BASE_URL);
  }
}
