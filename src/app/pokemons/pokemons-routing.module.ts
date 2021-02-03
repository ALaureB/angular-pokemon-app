import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailComponent } from './Components/Pokemon Detail/pokemon-detail.component';
import { PokemonListComponent } from './Components/Pokemon List/pokemon-list.component';

const pokemonsRoutes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
