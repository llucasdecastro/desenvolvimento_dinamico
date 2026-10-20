
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Pessoa } from './pessoa/pessoa';
import { Padrao } from './padrao/padrao';
import { Eventos } from './eventos/eventos';
import { CadastroEvento } from './pages/cadastro-evento/cadastro-evento';
import { Empresa } from './empresa/empresa';
import { NaoEncontrada } from './nao-encontrada/nao-encontrada';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'pessoa', component: Pessoa },
  { path: 'padrao', component: Padrao },
  { path: 'empresa', component: Empresa },

  { path: 'eventos/novo', component: CadastroEvento },
  { path: 'eventos', component: Eventos },

  // A rota curinga deve ficar sempre por último.
  { path: '**', component: NaoEncontrada }
];