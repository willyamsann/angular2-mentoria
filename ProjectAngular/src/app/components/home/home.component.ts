import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  aluno: Aluno ={}
  alunos: Aluno[] = []
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
   this.getLocalStorange();
  }

  addAluno(){
    if(this.aluno.matricula === undefined){
      this.toastr.error("Removido com falha", "Verificar")
      return
    }
    this.alunos.push({
      name: this.aluno.name,
      matricula: this.aluno.matricula,
      serie: this.aluno.serie
    })
    this.updateLocalStorage();
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.aluno = {}
  }

  removeAluno(index: number){
    this.alunos.splice(index,1)
    this.updateLocalStorage();
    this.toastr.error("Removido com falha", "Verificar")

  }
  getLocalStorange(){
    if(localStorage.getItem("#alunos")){
      var localAlunos = localStorage.getItem("#alunos");
      this.alunos = JSON.parse(localAlunos ? localAlunos : '') || []
    }
  }

  refreshAlunos(){
    this.alunos[0] = this.alunos[0]
    this.updateLocalStorage();
  }

  updateLocalStorage(){
    if(localStorage.getItem("#alunos")){
      localStorage.removeItem("#alunos")
     localStorage.setItem("#alunos", JSON.stringify(this.alunos))

   }else{
     localStorage.setItem("#alunos", JSON.stringify(this.alunos))
   }
  }

}
