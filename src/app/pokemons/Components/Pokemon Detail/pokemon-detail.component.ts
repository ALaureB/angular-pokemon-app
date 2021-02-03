import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Pokemon } from '../../Models/Pokemon';
import { POKEMONS } from '../../mock-pokemon';

@Component({
  selector: 'pokemon-detail',
  templateUrl:
    './app/pokemons/Components/Pokemon Detail/pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnInit {
  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;

    let pokemonId = +this.route.snapshot.paramMap.get('id');
    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].id == pokemonId) {
        this.pokemon = this.pokemons[i];
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }
}
