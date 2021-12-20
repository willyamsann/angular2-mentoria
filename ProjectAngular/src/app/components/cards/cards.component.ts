import { Component, Input, OnInit } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { Aluno } from 'src/app/models/aluno';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input()
  card: Cards = {}

  alunos: Aluno[] = [
    {
      name: "Willyam",
      matricula: "oijhuygtfc",
      serie: "1ª Ano"
    },
    {
      name: "Willyam",
      matricula: "oijhuygtfc",
      serie: "1ª Ano"
    },
    {
      name: "Willyam",
      matricula: "oijhuygtfc",
      serie: "1ª Ano"
    }

  ]
  cards: Cards[] =[
    {
    title: 'Willyam',
    header: 'teste',
    text: 'teste'
  },
  {
    title: 'Janiely',
    header: 'teste',
    text: 'teste'
  },
  {
    title: 'Bruno',
    header: 'teste',
    text: 'teste'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

  addAluno(){
    this.alunos.push({
      name: "NovoAluno",
      matricula: "Nova matricula",
      serie: "2ª serie"
    })
    this.card.text = "Novo Aluno adicionado"
  }
  removeAluno(index: number){
    this.alunos.splice(index,1)
  }
}
