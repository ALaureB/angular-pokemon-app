"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemon_detail_component_1 = require("./Components/Pokemon Detail/pokemon-detail.component");
var pokemon_form_component_1 = require("./Components/Pokemon Form/pokemon-form.component");
var pokemon_list_component_1 = require("./Components/Pokemon List/pokemon-list.component");
var pokemonsRoutes = [
    { path: 'pokemons', component: pokemon_list_component_1.PokemonListComponent },
    { path: 'pokemon/:id', component: pokemon_detail_component_1.PokemonDetailComponent },
    { path: 'pokemon/edit/:id', component: pokemon_form_component_1.PokemonFormComponent },
];
var PokemonsRoutingModule = /** @class */ (function () {
    function PokemonsRoutingModule() {
    }
    PokemonsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(pokemonsRoutes)],
            exports: [router_1.RouterModule],
        })
    ], PokemonsRoutingModule);
    return PokemonsRoutingModule;
}());
exports.PokemonsRoutingModule = PokemonsRoutingModule;
//# sourceMappingURL=pokemons-routing.module.js.map