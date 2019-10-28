import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientGestionStockProduits';
  showHideSideBar: boolean;
  onshowSideBarChange(showHideSideBar){
    this.showHideSideBar= showHideSideBar;
  }

}
