import { SafePipe } from './safe.pipe';
import { from } from 'rxjs/observable/from';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';
import {AllmaterialModule} from './modules/allmaterial.module';
import { AppRoutingModule } from './modules/app-routing.module';

import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ChatComponent } from './components/chat/chat.component'
import { AppComponent } from './components/app.component';
import { CoinsComponent } from './components/coins/coins.component';
import {CryptocompareService} from './services/cryptocompare.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    SafePipe,
    ChatComponent,
    CoinsComponent
  ],
  imports: [
    BrowserModule,
   HttpModule,
   FormsModule,
   FlexLayoutModule,
   AllmaterialModule,
   AppRoutingModule,
   HttpClientModule
  ],
  providers: [CryptocompareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
