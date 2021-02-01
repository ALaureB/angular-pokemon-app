import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../../Models/Pokemon';
import { POKEMONS } from '../../mock-pokemon';

@Component({
  selector: 'pokemon-list',
  templateUrl: './app/Components/Pokemon List/pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  private pokemons: Pokemon[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert(`Vous avez cliqué sur ${pokemon.name}`);
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
