import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';

import { PokemonDetailComponent } from './Components/Pokemon Detail/pokemon-detail.component';
import { PokemonListComponent } from './Components/Pokemon List/pokemon-list.component';

import { BorderCardDirective } from './Directives/border-card.directive';
import { PokemonTypeColorPipe } from './Pipes/pokemon-type-color.pipe';

@NgModule({
  imports: [CommonModule, PokemonsRoutingModule],
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  providers: [],
})
export class PokemonsModule {}
