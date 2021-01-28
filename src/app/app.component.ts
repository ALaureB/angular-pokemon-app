import { Component, OnInit } from "@angular/core";

import { Pokemon } from "./Models/Pokemon";
import { POKEMONS } from "./mock-pokemon";

@Component({
  selector: "pokemon-app",
  templateUrl: "./app/app.component.html"
})
export class AppComponent implements OnInit {
  private pokemons: Pokemon[] = [];

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert(`Vous avez cliqué sur ${pokemon.name}`);
  }
}
