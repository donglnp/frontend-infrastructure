import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ICardPokemon, IParameterPokemon } from '../models/pokemon.model';

import { HttpClient } from '@angular/common/http';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly httpClient = inject(HttpClient);

  public getDataFirst(): Observable<ICardPokemon[]> {
    return this.httpClient.get('assets/data/pokemon-fetch.json') as Observable<ICardPokemon[]>;
  }

  public search(key: string): Observable<ICardPokemon[]> {
    let params: IParameterPokemon = {
      q: `name:"*${key}*"`,
      orderBy: `-set.releaseDate`,
      page: 1,
      pageSize: 250,
    };
    return from(PokemonTCG.findCardsByQueries(params));
  }
}
