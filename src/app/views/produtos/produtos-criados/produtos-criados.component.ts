import { ProdutosService } from './../produtos.service';
import { ProdutoVO } from './../../../model/vo/vo/produto.vo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-criados',
  templateUrl: './produtos-criados.component.html',
  styleUrls: ['./produtos-criados.component.scss']
})
export class ProdutosCriadosComponent implements OnInit {

  produtoVO: ProdutoVO = new ProdutoVO();
  constructor(private rota: Router,
              private servico: ProdutosService) { }

  ngOnInit(): void {
  }

  incluir(){
    this.servico.incluirProduto(this.produtoVO).subscribe(() => {
      console.log("Incluir = ", this.produtoVO);
      this.servico.showMessage("Produto inserido com sucesso!");
      this.cancelar();
    })

  }

  cancelar(){
    this.rota.navigate(['/produtos']);
  }


}
