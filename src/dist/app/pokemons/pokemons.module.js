"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pokemons_routing_module_1 = require("./pokemons-routing.module");
var pokemon_detail_component_1 = require("./Components/Pokemon Detail/pokemon-detail.component");
var pokemon_form_component_1 = require("./Components/Pokemon Form/pokemon-form.component");
var pokemon_list_component_1 = require("./Components/Pokemon List/pokemon-list.component");
var border_card_directive_1 = require("./Directives/border-card.directive");
var pokemon_type_color_pipe_1 = require("./Pipes/pokemon-type-color.pipe");
var pokemons_service_1 = require("./pokemons.service");
var PokemonsModule = /** @class */ (function () {
    function PokemonsModule() {
    }
    PokemonsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, pokemons_routing_module_1.PokemonsRoutingModule],
            declarations: [
                pokemon_detail_component_1.PokemonDetailComponent,
                pokemon_form_component_1.PokemonFormComponent,
                pokemon_list_component_1.PokemonListComponent,
                border_card_directive_1.BorderCardDirective,
                pokemon_type_color_pipe_1.PokemonTypeColorPipe,
            ],
            providers: [pokemons_service_1.PokemonsService],
        })
    ], PokemonsModule);
    return PokemonsModule;
}());
exports.PokemonsModule = PokemonsModule;
//# sourceMappingURL=pokemons.module.js.map