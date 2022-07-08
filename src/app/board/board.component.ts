import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[] = Array(9).fill(null);
  player: string = "";
  winner: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.player = Math.random() < 0.5 ? "X" : "O";
    this.squares.fill(null);
    this.winner = undefined;
  }

  makeMove(ind: number) {
    if (!this.winner && !this.squares[ind]) {
      this.squares.splice(ind, 1, this.player);

      this.winner = this.calcWinner();

      if (this.winner) {
        return;
      }

      this.player = this.player === "O" ? "X" : "O";
    }
  }

  calcWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        this.squares[a] &&
        this.squares[a] == this.squares[b] &&
        this.squares[a] == this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    return null;
  }
}
