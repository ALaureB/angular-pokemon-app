import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-rounting.module';
import { PokemonsModule } from './pokemons/pokemons.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Components/Page Not Found/page-not-found.component';

@NgModule({
  imports: [BrowserModule, PokemonsModule, AppRoutingModule],
  declarations: [AppComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
