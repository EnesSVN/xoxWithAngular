import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'XoX';
  mark = '';
  games: string[] = [];
  constructor() {
    this.newGame();
  }

  setMark(index: number) {
    this.games[index] = this.mark;
    this.mark = this.mark === 'X' ? 'O' : 'X';
  }

  newGame() {
    this.games = ['', '', '', '', '', '', '', '', ''];
    this.mark = 'X';
  }
}
