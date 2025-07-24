import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Help } from './pages/help/help';
import { About } from './pages/about/about';
import { LevelSelection } from './pages/level-selection/level-selection';
import { NotFound } from './pages/not-found/not-found';
import { IdentificationUser } from './pages/identification-user/identification-user';

export const routes: Routes = [
    {path:"home", component: Home},
    {path:"help", component: Help},
    {path:"about", component: About},
    {path:"level-selection", component: LevelSelection},
    {path:"identification-user", component: IdentificationUser},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFound }
];
