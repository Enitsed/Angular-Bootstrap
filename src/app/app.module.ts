import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {AppComponent} from './app.component';
import {DoyouHeaderComponent} from './doyou-header/doyou-header.component';
import {DoyouFooterComponent} from './doyou-footer/doyou-footer.component';
import {RouterModule, Routes} from "@angular/router";
import {DoyouAlbumComponent} from './doyou-album/doyou-album.component';
import {DoyouBoardComponent} from './doyou-board/doyou-board.component';
import {DoyouAboutComponent} from './doyou-about/doyou-about.component';
import {DoyouMainComponent} from './doyou-main/doyou-main.component';
import {DoyouNavbarComponent} from './doyou-navbar/doyou-navbar.component';
import {HttpClientModule} from "@angular/common/http";

const doYouRoutes: Routes = [
  { path: 'main', component: DoyouMainComponent},
  { path: 'album', component: DoyouAlbumComponent},
  { path: 'board', component: DoyouBoardComponent},
  { path: 'about', component: DoyouAboutComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    DoyouHeaderComponent,
    DoyouFooterComponent,
    DoyouAlbumComponent,
    DoyouBoardComponent,
    DoyouAboutComponent,
    DoyouMainComponent,
    DoyouNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(doYouRoutes),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
