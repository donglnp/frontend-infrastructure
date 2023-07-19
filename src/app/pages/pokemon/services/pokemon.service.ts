import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CardPokemon, ParameterPokemon } from '../models/pokemon.model';

import { HttpClient } from '@angular/common/http';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly httpClient = inject(HttpClient);

  public getDataFirst(): Observable<CardPokemon[]> {
    return this.httpClient.get('assets/data/pokemon-fetch.json') as Observable<CardPokemon[]>;
  }

  public search(key: string): Observable<CardPokemon[]> {
    let params: ParameterPokemon = {
      q: `name:"*${key}*"`,
      orderBy: `-set.releaseDate`,
      page: 1,
      pageSize: 250,
    };
    return from(PokemonTCG.findCardsByQueries(params));
  }
}
