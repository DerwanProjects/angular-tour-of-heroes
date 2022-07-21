import { Component, OnInit, Input } from '@angular/core';
import { Pair } from '../pair';

@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html',
  styleUrls: ['./matching-game.component.css']
})
export class MatchingGameComponent implements OnInit {

  @Input() pairs!: Pair[];
  solvedPairs: Pair[] = [];
  unsolvedPairs: Pair[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<this.pairs.length;i++) {
      this.unsolvedPairs.push(this.pairs[i]);
    }
  }

}
