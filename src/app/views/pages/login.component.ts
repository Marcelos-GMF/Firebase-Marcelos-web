import { UsuarioVO } from '../../model/vo/usuario.vo';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroupLogin: FormGroup;
  private usuarioVO: UsuarioVO = new UsuarioVO();

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  // this.formGroupCanteiro = this.formBuilder.group({
  //   listarNomeServico: [this.service.voltar ? this.itensSelecionados = this.service.listarItensSelecionados : null],
  //   id: this.formBuilder.group({
  //       nomeCanteiro: [this.service.voltar ? this.service.filtroCanteiroBackup.id.nomeCanteiro : null]
  //   }),
  //   statusAtivo: [this.service.voltar && this.service.filtroCanteiroBackup.statusAtivo === 'S' ? true : false]
  // });

  iniciarFormulario(){

    this.formGroupLogin =  this.formBuilder.group({
       nome: [null],
       senha: [null]
    });

  }

  onSubmit(){
    this.authService.logar(this.formGroupLogin.value);
  }

}
