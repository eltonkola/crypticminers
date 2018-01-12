import { CoinDetailsComponent } from './../components/coins/coin-details/coin-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../components/app.component';
import { AboutComponent } from '../components/about/about.component';
import { ChatComponent } from '../components/chat/chat.component';
import { CoinsComponent } from '../components/coins/coins.component';

const routes: Routes = [
  { path: '', redirectTo: 'coins', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'coins/:coin_name/:coin_id', component: CoinDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
