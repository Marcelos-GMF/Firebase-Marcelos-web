import { ProdutoVO } from './../../../model/vo/vo/produto.vo';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-read',
  templateUrl: './produtos-read.component.html',
  styleUrls: ['./produtos-read.component.scss']
})
export class ProdutosReadComponent implements OnInit {

  produtoVO: ProdutoVO = new ProdutoVO();
  listaProdutos: ProdutoVO[];
  displayedColumns = ['id','nome','preco'];

  constructor(private rota: Router,
              private servico: ProdutosService) { }

  ngOnInit(): void {
    // this.pesquisarProdutos();
  }

   // Pesquisa os dados no Backend.
   pesquisarProdutos() {
    this.servico.read().subscribe((resposta: ProdutoVO[]) => {
      this.listaProdutos = resposta; 
    });
  }

}
