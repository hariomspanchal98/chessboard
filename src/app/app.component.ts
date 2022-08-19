import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'chessboard';

  flag: any = [[false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false]];

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

  fun: any;

  operator: any;

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
    if (this.operator == 'bishop')
      this.clickBishop(a, b);
    if (this.operator == 'rook')
      this.clickRook(a, b);
    if (this.operator == 'queen') {
      this.clickBishop(a, b);
      this.clickRook(a, b);
    }
  }

  setBishop() {
    this.operator = 'bishop';
  }

  clickBishop(r: any, c: any) {
    this.flag[r][c] = true;
    {
      let i = 1;
      while (r - i >= 0 || r + i < 8) {
        if (r - i >= 0 && c - i >= 0)
          this.flag[r - i][c - i] = true;
        if (r - i >= 0 && c + i < 8)
          this.flag[r - i][c + i] = true;
        if (r + i < 8 && c - i >= 0)
          this.flag[r + i][c - i] = true;
        if (r + i < 8 && c + i < 8)
          this.flag[r + i][c + i] = true;
        i++;
      }
    }
  }

  setRook() {
    this.operator = 'rook';
  }

  clickRook(r: any, c: any) {
    for (let i = 0; i < 8; i++)
      this.flag[r][i] = true;
    for (let i = 0; i < 8; i++)
      this.flag[i][c] = true;
  }

  setQueen() {
    this.operator = 'queen';
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
}
