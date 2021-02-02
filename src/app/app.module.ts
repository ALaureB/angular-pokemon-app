import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-rounting.module';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './Components/Pokemon List/pokemon-list.component';
import { PokemonDetailComponent } from './Components/Pokemon Detail/pokemon-detail.component';
import { PageNotFoundComponent } from './Components/Page Not Found/page-not-found.component';

import { BorderCardDirective } from './Directives/border-card.directive';
import { PokemonTypeColorPipe } from './Pipes/pokemon-type-color.pipe';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    PokemonDetailComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
