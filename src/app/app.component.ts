import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
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
