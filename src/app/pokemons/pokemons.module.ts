import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';

import { PokemonDetailComponent } from './Components/Pokemon Detail/pokemon-detail.component';
import { PokemonFormComponent } from './Components/Pokemon Form/pokemon-form.component';
import { PokemonListComponent } from './Components/Pokemon List/pokemon-list.component';

import { BorderCardDirective } from './Directives/border-card.directive';
import { PokemonTypeColorPipe } from './Pipes/pokemon-type-color.pipe';

import { PokemonsService } from './pokemons.service';

@NgModule({
  imports: [CommonModule, PokemonsRoutingModule],
  declarations: [
    PokemonDetailComponent,
    PokemonFormComponent,
    PokemonListComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  providers: [PokemonsService],
})
export class PokemonsModule {}
