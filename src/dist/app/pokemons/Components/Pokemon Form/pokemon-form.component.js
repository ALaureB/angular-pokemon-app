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
var PokemonFormComponent = /** @class */ (function () {
    function PokemonFormComponent(route, router, pokemonsService) {
        this.route = route;
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.pokemon = null;
    }
    PokemonFormComponent.prototype.ngOnInit = function () {
        var pokemonId = +this.route.snapshot.paramMap.get('id');
        this.pokemon = this.pokemonsService.getPokemonWithId(pokemonId);
    };
    PokemonFormComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemon', this.pokemon.id]);
    };
    PokemonFormComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-form',
            templateUrl: './app/pokemons/Components/Pokemon Form/pokemon-form.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            pokemons_service_1.PokemonsService])
    ], PokemonFormComponent);
    return PokemonFormComponent;
}());
exports.PokemonFormComponent = PokemonFormComponent;
//# sourceMappingURL=pokemon-form.component.js.map