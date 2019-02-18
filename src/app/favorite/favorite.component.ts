import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input("is-favorite") isFavorite: boolean;  // alias를 지정했더라도 template에 쓰인 alias는 수동 변경!
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue : this.isFavorite });
  }
}


export interface FavoriteChangedEventArgs {
  newValue: boolean,
}
