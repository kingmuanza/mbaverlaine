import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiographieComponent } from './pages/biographie/biographie.component';
import { CollaborationsComponent } from './pages/collaborations/collaborations.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { OeuvresComponent } from './pages/oeuvres/oeuvres.component';
import { EmojiDirective } from './directives/emoji.directive';

@NgModule({
  declarations: [
    AppComponent,
    BiographieComponent,
    CollaborationsComponent,
    CommandesComponent,
    OeuvresComponent,
    EmojiDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
