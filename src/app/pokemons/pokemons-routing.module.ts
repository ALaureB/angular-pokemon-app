import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailComponent } from './Components/Pokemon Detail/pokemon-detail.component';
import { PokemonFormComponent } from './Components/Pokemon Form/pokemon-form.component';
import { PokemonListComponent } from './Components/Pokemon List/pokemon-list.component';

const pokemonsRoutes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'pokemon/edit/:id', component: PokemonFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
