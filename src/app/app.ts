import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //Inicializando o HttpClient
  private http = inject(HttpClient);

  //Criando um JSON para capturar os campos do forulário
  //e este JSON será utilizado para enviar os dados
  //para a API.
  produto = new FormGroup({
    nome: new FormControl(''), //campo
    preco: new FormControl('0'), //campo
    quantidade: new FormControl('0'), //campo
  });

  //Função que será executada quando 
  //o botão SUBMIT do formulário for clicado
  cadastrarProduto() {
    //Fazendo a chamada para o ENDPOINT POST da API (cadastrar produto)
    this.http.post('http://localhost:8081/api/v1/produtos', this.produto.value)
      .subscribe((resposta) => { //capturando o retorno da API
          console.log(resposta); //imprimindo os dados da resposta no console
      });
  }
}
