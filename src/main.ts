import * as process from 'process';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

window['process'] = process;
process.env['POKEMONTCG_API_KEY'] = environment.POKEMON_TCG_API_KEY;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
