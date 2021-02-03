"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemons_service_1 = require("../../pokemons.service");
var PokemonListComponent = /** @class */ (function () {
    function PokemonListComponent(router, pokemonsService) {
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.pokemons = [];
    }
    PokemonListComponent.prototype.ngOnInit = function () {
        this.pokemons = this.pokemonsService.getPokemons();
    };
    PokemonListComponent.prototype.selectPokemon = function (pokemon) {
        this.router.navigate(['/pokemon', pokemon.id]);
    };
    PokemonListComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-list',
            templateUrl: './app/pokemons/Components/Pokemon List/pokemon-list.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router,
            pokemons_service_1.PokemonsService])
    ], PokemonListComponent);
    return PokemonListComponent;
}());
exports.PokemonListComponent = PokemonListComponent;
//# sourceMappingURL=pokemon-list.component.js.map