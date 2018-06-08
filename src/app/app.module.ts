// 모듈 리스트
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
// 컴포넌트 리스트
import {AppComponent} from './app.component';
import {DoyouHeaderComponent} from './doyou-header/doyou-header.component';
import {DoyouFooterComponent} from './doyou-footer/doyou-footer.component';
import {DoyouAlbumComponent} from './doyou-album/doyou-album.component';
import {DoyouBoardComponent} from './doyou-board/doyou-board.component';
import {DoyouAboutComponent} from './doyou-about/doyou-about.component';
import {DoyouMainComponent} from './doyou-main/doyou-main.component';
import {DoyouNavbarComponent} from './doyou-navbar/doyou-navbar.component';
import {DoyouLoginModalComponent} from './doyou-login-modal/doyou-login-modal.component';
import {DoyouFindModalComponent} from './doyou-find-modal/doyou-find-modal.component';
import {DoyouJoinModalComponent} from './doyou-join-modal/doyou-join-modal.component';
// 서비스 리스트
import {DoyouAuthService} from "./doyou-auth.service";
import {DoyouAlbumService} from "./doyou-album.service";

// 라우트 경로 설정
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
    DoyouNavbarComponent,
    DoyouLoginModalComponent,
    DoyouFindModalComponent,
    DoyouJoinModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(doYouRoutes),
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [DoyouAuthService, DoyouAlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
