import { Component } from '@angular/core';
import { Cards } from './models/cards';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  card: Cards =
    {
    title: 'Vindo do Pai',
    header: 'teste',
    text: 'teste'
  }

  title = 'ProjectAngular';
}
