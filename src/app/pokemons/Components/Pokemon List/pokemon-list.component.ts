import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonsService } from '../../pokemons.service';

import { Pokemon } from '../../Models/Pokemon';

@Component({
  selector: 'pokemon-list',
  templateUrl:
    './app/pokemons/Components/Pokemon List/pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  private pokemons: Pokemon[] = [];

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
