import { Injectable } from '@angular/core';

import { Pokemon } from './Models/Pokemon';
import { POKEMONS } from './mock-pokemon';

@Injectable()
export class PokemonsService {
  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonWithId(id: number): Pokemon {
    let pokemons = this.getPokemons();

    for (let i = 0; i < pokemons.length; i++) {
      if (id === pokemons[i].id) {
        return pokemons[i];
      }
    }
  }
}
