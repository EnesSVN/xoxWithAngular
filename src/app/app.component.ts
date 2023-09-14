import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'XoX';
  mark = '';
  games: string[] = [];
  moves: any = [];

  constructor() {
    this.newGame();
  }

  setMark(index: number) {
    if (this.games[index] !== '') return;
    this.games[index] = this.mark;
    this.moves.push([...this.games]);
    this.mark = this.mark === 'X' ? 'O' : 'X';
  }

  newGame() {
    this.games = ['', '', '', '', '', '', '', '', ''];
    this.mark = 'X';
  }

  returnSelectMove(index: number) {
    this.games = this.moves[index];
    this.moves = this.moves.slice(0, index);
    this.mark = this.mark === 'X' ? 'O' : 'X';
  }
}
