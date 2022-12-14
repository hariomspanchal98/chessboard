import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'chessboard';
  var1: any;
  flag: any = [[false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false]];
  // this is comment

  rows = [1, 2, 3, 4, 5, 6, 7, 8];
  columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  final: any = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  ];

  board: any = [['brook', 'bknight', 'bbishop', 'bking', 'bqueen', 'bbishop', 'bknight', 'brook'],
  ['bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ['wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn'],
  ['wrook', 'wknight', 'wbishop', 'wking', 'wqueen', 'wbishop', 'wknight', 'wrook']
  ]

  fun: any;

  operator: any;
  count = 0;

  tempObj: string = '';
  movingR: any;
  movingC: any;

  turn:boolean = true;

  ngOnInit(): void {

    for (let i = 0; i < this.final.length; i++) {
      for (let j = 0; j < this.final[i].length; j++) {
        this.final[i][j] = this.rows[i] + this.columns[j];
      }
    }
    // console.log('dfsdfsf', this.flag[4][5], 'dfsdfsdf');


    // this.click(Math.floor(Math.random() * 6),Math.floor(Math.random() * 6));

  }

  click(a: number, b: number) {
    // console.log(this.operator);
    // console.log(a, b);
    this.movingR = a;
    this.movingC = b;
    // console.table(this.board);

    this.reset();
    if (this.operator == 'bishop')
      this.clickBishop(a, b);
    else if (this.operator == 'rook')
      this.clickRook(a, b);
    else if (this.operator == 'queen') {
      this.clickBishop(a, b);
      this.clickRook(a, b);
    }
    else if (this.operator == 'knight')
      this.clickKnight(a, b);
    else if (this.operator == 'king')
      this.clickKing(a, b);
    else if (this.operator == 'bpawn')
      this.clickBpawn(a, b);
    else if (this.operator == 'wpawn')
      this.clickWpawn(a, b);
    else
      this.resetOp(a, b);
  }

  setBishop(r: any, c: any) {
    this.operator = 'bishop';
    this.tempObj = this.board[r][c];
  }

  clickBishop(r: any, c: any) {
    this.flag[r][c] = true;
    let first = true;
    let second = true;
    let third = true;
    let fourth = true;

    {
      let i = 1;
      while (r - i >= 0 || r + i < 8) {
        if ((r - i >= 0 && c - i >= 0) && (this.board[r - i][c - i] == 'null') && first)
          this.flag[r - i][c - i] = true;
        else
          first = false;
        if ((r - i >= 0 && c + i < 8) && (this.board[r - i][c + i] == 'null') && second)
          this.flag[r - i][c + i] = true;
        else
          second = false;
        if ((r + i < 8 && c - i >= 0) && (this.board[r + i][c - i] == 'null') && third)
          this.flag[r + i][c - i] = true;
        else
          third = false;
        if ((r + i < 8 && c + i < 8) && (this.board[r + i][c + i] == 'null') && fourth)
          this.flag[r + i][c + i] = true;
        else
          fourth = false;
        i++;
      }
    }
    this.operator = '';
  }

  setRook(r: any, c: any) {
    this.operator = 'rook';
    this.tempObj = this.board[r][c];
  }

  clickRook(r: any, c: any) {
    // console.log('rook clicked');

    for (let i = r + 1; i < 8; i++)
      if (this.board[i][c] == 'null')
        this.flag[i][c] = true;
      else
        break;

    for (let i = r - 1; i >= 0; i--)
      if (this.board[i][c] == 'null')
        this.flag[i][c] = true;
      else
        break;

    for (let i = c + 1; i < 8; i++)
      if (this.board[r][i] == 'null')
        this.flag[r][i] = true;
      else
        break;

    for (let i = c - 1; i >= 0; i--)
      if (this.board[r][i] == 'null')
        this.flag[r][i] = true;
      else
        break;


    this.operator = '';
  }

  setKnight(r: any, c: any) {
    this.operator = 'knight';
    this.tempObj = this.board[r][c];
  }

  clickKnight(r: any, c: any) {
    if ((r - 2 >= 0 || r + 2 < 8) && (c - 2 >= 0 || c + 2 < 8)) {
      if ((r - 2 >= 0) && (c - 1 >= 0) && this.board[r - 2][c - 1] == 'null') { this.flag[r - 2][c - 1] = true; };
      if ((r - 2 >= 0) && (c + 1 < 8) && this.board[r - 2][c + 1] == 'null') { this.flag[r - 2][c + 1] = true; };
      if ((r + 2 < 8) && (c - 1 >= 0) && this.board[r + 2][c - 1] == 'null') { this.flag[r + 2][c - 1] = true; };
      if ((r + 2 < 8) && (c + 1 < 8) && this.board[r + 2][c + 1] == 'null') { this.flag[r + 2][c + 1] = true; };
      if ((r - 1 >= 0) && (c - 2 >= 0) && this.board[r - 1][c - 2] == 'null') { this.flag[r - 1][c - 2] = true; };
      if ((r - 1 >= 0) && (c + 2 < 8) && this.board[r - 1][c + 2] == 'null') { this.flag[r - 1][c + 2] = true; };
      if ((r + 1 < 8) && (c - 2 >= 0) && this.board[r + 1][c - 2] == 'null') { this.flag[r + 1][c - 2] = true; };
      if ((r + 1 < 8) && (c + 2 < 8) && this.board[r + 1][c + 2] == 'null') { this.flag[r + 1][c + 2] = true; };
    }
    this.operator = '';
  }

  setQueen(r: any, c: any) {
    this.operator = 'queen';
    this.tempObj = this.board[r][c];
  }

  setKing(r: any, c: any) {
    this.operator = 'king';
    this.tempObj = this.board[r][c];
  }

  clickKing(r: any, c: any) {
    if ((r - 1 >= 0 || r + 1 < 8) && (c - 1 >= 0 || c + 1 < 8)) {
      if (r - 1 >= 0 && c - 1 >= 0 && this.board[r - 1][c - 1] == 'null') { this.flag[r - 1][c - 1] = true };
      if (r - 1 >= 0 && c + 1 < 8 && this.board[r - 1][c + 1] == 'null') { this.flag[r - 1][c + 1] = true };
      if (r + 1 < 8 && c - 1 >= 0 && this.board[r + 1][c - 1] == 'null') { this.flag[r + 1][c - 1] = true };
      if (r + 1 < 8 && c + 1 < 8 && this.board[r + 1][c + 1] == 'null') { this.flag[r + 1][c + 1] = true };
      if (r + 1 < 8 && c >= 0 && this.board[r + 1][c] == 'null') { this.flag[r + 1][c] = true };
      if (r - 1 >= 0 && c >= 0 && this.board[r - 1][c] == 'null') { this.flag[r - 1][c] = true };
      if (r >= 0 && c - 1 >= 0 && this.board[r][c - 1] == 'null') { this.flag[r][c - 1] = true };
      if (r >= 0 && c + 1 < 8 && this.board[r][c + 1] == 'null') { this.flag[r][c + 1] = true };
    }
    this.operator = '';
  }

  setBPawn(r: any, c: any) {
    this.operator = 'bpawn';
    this.tempObj = this.board[r][c];
  }

  clickBpawn(r: any, c: any) {
    if (r == 1) {
      if (this.board[r + 1][c] == 'null') {
        this.flag[r + 1][c] = true
        if (this.board[r + 2][c] == 'null') {
          this.flag[r + 2][c] = true
        };
      };
    }
    else
      if (this.board[r + 1][c] == 'null') { this.flag[r + 1][c] = true };

    if (r + 1 < 8 && (c - 1 >= 0 || c + 1 < 8)) {
      if (this.board[r + 1][c + 1] == 'wpawn' || this.board[r + 1][c + 1] == 'wrook' || this.board[r + 1][c + 1] == 'wknight' || this.board[r + 1][c + 1] == 'wbishop' || this.board[r + 1][c + 1] == 'wking' || this.board[r + 1][c + 1] == 'wqueen')
        this.flag[r + 1][c + 1] = 'red';
      if (this.board[r + 1][c - 1] == 'wpawn' || this.board[r + 1][c - 1] == 'wrook' || this.board[r + 1][c - 1] == 'wknight' || this.board[r + 1][c - 1] == 'wbishop' || this.board[r + 1][c - 1] == 'wking' || this.board[r + 1][c - 1] == 'wqueen')
        this.flag[r + 1][c - 1] = 'red';
    }
    this.operator = '';
  }

  setWPawn(r: any, c: any) {
    this.operator = 'wpawn';
    this.tempObj = this.board[r][c];
  }

  clickWpawn(r: any, c: any) {
    if (r == 6) {
      if (this.board[r - 1][c] == 'null') {
        this.flag[r - 1][c] = true;
        if (this.board[r - 2][c] == 'null') { this.flag[r - 2][c] = true };
      };
    }
    else
      if (this.board[r - 1][c] == 'null') { this.flag[r - 1][c] = true };

    if (r - 1 >= 0 && (c - 1 >= 0 || c + 1 < 8)) {
      if (this.board[r - 1][c + 1] == 'bpawn' || this.board[r - 1][c + 1] == 'brook' || this.board[r - 1][c + 1] == 'bknight' || this.board[r - 1][c + 1] == 'bbishop' || this.board[r - 1][c + 1] == 'bking' || this.board[r - 1][c + 1] == 'bqueen')
        this.flag[r - 1][c + 1] = 'red';
      if (this.board[r - 1][c - 1] == 'bpawn' || this.board[r - 1][c - 1] == 'brook' || this.board[r - 1][c - 1] == 'bknight' || this.board[r - 1][c - 1] == 'bbishop' || this.board[r - 1][c - 1] == 'bking' || this.board[r - 1][c - 1] == 'bqueen')
        this.flag[r - 1][c - 1] = 'red';
    }

    this.operator = '';
  }

  start() {
    this.fun = setInterval(() => { this.set() }, 70);
  }

  set() {
    this.flag = [[false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false]];
    this.click(Math.floor(Math.random() * 7), Math.floor(Math.random() * 7));
  }

  reset() {
    clearInterval(this.fun);
    this.flag = [[false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false]];
  }

  resetOp(r: any, c: any) {
    if (this.tempObj && (this.flag[r][c] == true)) {
      this.board[r][c] = this.tempObj;
      // console.log(this.board[r][c], 'dsfdfs', this.tempObj);
      this.board[this.movingR][this.movingC] = 'null';
      this.reset();
      // console.table(this.board);
    }
    else if (this.tempObj && (this.flag[r][c] == 'red')) {
      // console.log('abc');
      this.board[r][c] = this.tempObj;
      // console.log(this.board[r][c], 'dsfdfs', this.tempObj);
      this.board[this.movingR][this.movingC] = 'null';
      this.reset();
    }
    else {
      // console.log('Reseted', this.count++);
      this.tempObj = '';
      this.operator = '';
      this.reset();
    }
  }
}
