import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'XoX';
  mark = '';
  message = '';
  games: any[] = [];
  moves: any = [];
  gameOver = false;

  constructor() {
    this.newGame();
  }

  setMark(index: number) {
    if (this.games[index].mark !== '' || this.gameOver) return;
    this.games[index].mark = this.mark;
    this.isGameOver();
    if (this.gameOver) {
      this.message = this.mark + ' Win';
      return;
    } else {
      this.moves.push([...this.games]);
      this.mark = this.mark === 'X' ? 'O' : 'X';
      this.message = this.mark + ' Turn';
    }
  }

  newGame() {
    this.games = [
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
    ];
    this.mark = 'X';
    this.message = 'X Turn';
    this.gameOver = false;
    this.moves = [];
  }

  returnSelectMove(index: number) {
    this.games = this.moves[index];
    this.moves = this.moves.slice(0, index);
    this.mark = this.mark === 'X' ? 'O' : 'X';
    this.message = this.mark + ' Turn';
    this.gameOver = false;
  }

  isGameOver() {
    if (
      this.games[0].mark !== '' &&
      this.games[0].mark === this.games[1].mark &&
      this.games[1].mark === this.games[2].mark
    ) {
      this.gameOver = true;
      this.games[0].winner = true;
      this.games[1].winner = true;
      this.games[2].winner = true;
    } else if (
      this.games[3].mark !== '' &&
      this.games[3].mark === this.games[4].mark &&
      this.games[4].mark === this.games[5].mark
    ) {
      this.gameOver = true;
      this.games[3].winner = true;
      this.games[4].winner = true;
      this.games[5].winner = true;
    } else if (
      this.games[6].mark !== '' &&
      this.games[6].mark === this.games[7].mark &&
      this.games[7].mark === this.games[8].mark
    ) {
      this.gameOver = true;
      this.games[6].winner = true;
      this.games[7].winner = true;
      this.games[8].winner = true;
    } else if (
      this.games[0].mark !== '' &&
      this.games[0].mark === this.games[3].mark &&
      this.games[3].mark === this.games[6].mark
    ) {
      this.gameOver = true;
      this.games[0].winner = true;
      this.games[3].winner = true;
      this.games[6].winner = true;
    } else if (
      this.games[1].mark !== '' &&
      this.games[1].mark === this.games[4].mark &&
      this.games[4].mark === this.games[7].mark
    ) {
      this.gameOver = true;
      this.games[1].winner = true;
      this.games[4].winner = true;
      this.games[7].winner = true;
    } else if (
      this.games[2].mark !== '' &&
      this.games[2].mark === this.games[5].mark &&
      this.games[5].mark === this.games[8].mark
    ) {
      this.gameOver = true;
      this.games[2].winner = true;
      this.games[5].winner = true;
      this.games[8].winner = true;
    } else if (
      this.games[0].mark !== '' &&
      this.games[0].mark === this.games[4].mark &&
      this.games[4].mark === this.games[8].mark
    ) {
      this.gameOver = true;
      this.games[0].winner = true;
      this.games[4].winner = true;
      this.games[8].winner = true;
    } else if (
      this.games[2].mark !== '' &&
      this.games[2].mark === this.games[4].mark &&
      this.games[4].mark === this.games[6].mark
    ) {
      this.gameOver = true;
      this.games[2].winner = true;
      this.games[4].winner = true;
      this.games[6].winner = true;
    }
  }

  changeWinnerButtonClass(winner: boolean) {
    return !winner ? ' btn btn-warning' : ' btn btn-success';
  }
}
