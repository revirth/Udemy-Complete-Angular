import { Component, OnInit } from '@angular/core';
import { FavoriteChangedEventArgs } from '../favorite/favorite.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  post = {
    title: "Title",
    isFavorite: false
  }

  // onFavoriteChanged(isFavorite) { // isFavorite: boolean
  //   console.log('Favorite changed: ', isFavorite);
  // }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {  // eventArgs: interface 
    console.log('Favorite changed: ', eventArgs.newValue);
  }

  // Directives
  viewMode = '뷰모드';

  canSave = true;
  onChangeSaveButton() {
    this.canSave = !this.canSave;
  }

  task = {
    title: 'Review applications',
    assignee: {
      // name: 'John Snow'
    }
  }

}
