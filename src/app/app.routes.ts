import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { HelpComponent } from './pages/help/help';
import { AboutComponent } from './pages/about/about';
import { LevelSelectionComponent } from './pages/level-selection/level-selection';
import { NotFoundComponent } from './pages/not-found/not-found';
import { IdentificationUserComponent } from './pages/identification-user/identification-user';
import { Level1Component } from './pages/levels/level-1/level-1';
import { Level2Component } from './pages/levels/level-2/level-2';
import { Level3Component } from './pages/levels/level-3/level-3';
import { Level4Component } from './pages/levels/level-4/level-4';
import { Level5Component } from './pages/levels/level-5/level-5';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'level-selection', component: LevelSelectionComponent },
  { path: 'identification-user', component: IdentificationUserComponent },
  { path: 'level-1', component: Level1Component },
  { path: 'level-2', component: Level2Component },
  { path: 'level-3', component: Level3Component },
  { path: 'level-4', component: Level4Component },
  { path: 'level-5', component: Level5Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
