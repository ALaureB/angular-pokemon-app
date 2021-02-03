import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { PokemonsService } from '../../pokemons.service';

import { Pokemon } from '../../Models/Pokemon';

@Component({
  selector: 'pokemon-detail',
  templateUrl:
    './app/pokemons/Components/Pokemon Detail/pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit(): void {
    let pokemonId = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonsService.getPokemonWithId(pokemonId);
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }
}
