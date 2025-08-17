import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Help } from './pages/help/help';
import { About } from './pages/about/about';
import { LevelSelection } from './pages/level-selection/level-selection';
import { NotFound } from './pages/not-found/not-found';
import { IdentificationUser } from './pages/identification-user/identification-user';
import { Level1 } from './pages/levels/level-1/level-1';
import { Level2 } from './pages/levels/level-2/level-2';
import { Level3 } from './pages/levels/level-3/level-3';
import { Level4 } from './pages/levels/level-4/level-4';
import { Level5 } from './pages/levels/level-5/level-5';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'help', component: Help },
  { path: 'about', component: About },
  { path: 'level-selection', component: LevelSelection },
  { path: 'identification-user', component: IdentificationUser },
  { path: 'level-1', component: Level1 },
  { path: 'level-2', component: Level2 },
  { path: 'level-3', component: Level3 },
  { path: 'level-4', component: Level4 },
  { path: 'level-5', component: Level5 },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFound },
];
