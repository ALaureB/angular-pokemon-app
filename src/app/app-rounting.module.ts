import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './Components/Pokemon List/pokemon-list.component';
import { PokemonDetailComponent } from './Components/Pokemon Detail/pokemon-detail.component';

// routes
const appRoutes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
