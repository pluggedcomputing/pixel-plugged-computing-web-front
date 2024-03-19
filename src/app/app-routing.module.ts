import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LevelSelectionComponent } from './components/level-selection/level-selection.component';
import { ScreenFourLevelFourComponent } from './components/levels/four/screen-four-level-four/screen-four-level-four.component';
import { ScreenOneLevelFourComponent } from './components/levels/four/screen-one-level-four/screen-one-level-four.component';
import { ScreenThreeLevelFourComponent } from './components/levels/four/screen-three-level-four/screen-three-level-four.component';
import { ScreenTwoLevelFourComponent } from './components/levels/four/screen-two-level-four/screen-two-level-four.component';
import { ScreenOneLevelOneComponent } from './components/levels/one/screen-one-level-one/screen-one-level-one.component';
import { ScreenTwoLevelOneComponent } from './components/levels/one/screen-two-level-one/screen-two-level-one.component';
import { ScreenThreeLevelOneComponent } from './components/levels/one/screen-three-level-one/screen-three-level-one.component';
import { ScreenFourLevelOneComponent } from './components/levels/one/screen-four-level-one/screen-four-level-one.component';
import { ScreenFiveLevelOneComponent } from './components/levels/one/screen-five-level-one/screen-five-level-one.component';
import { ScreenSixLevelOneComponent } from './components/levels/one/screen-six-level-one/screen-six-level-one.component';
import { ScreenSevenLevelOneComponent } from './components/levels/one/screen-seven-level-one/screen-seven-level-one.component';
import { ScreenEightLevelOneComponent } from './components/levels/one/screen-eight-level-one/screen-eight-level-one.component';
import { ScreenNineLevelOneComponent } from './components/levels/one/screen-nine-level-one/screen-nine-level-one.component';
import { ScreenTenLevelOneComponent } from './components/levels/one/screen-ten-level-one/screen-ten-level-one.component';
import { ScreenElevenLevelOneComponent } from './components/levels/one/screen-eleven-level-one/screen-eleven-level-one.component';
import { ScreenTwelveLevelOneComponent } from './components/levels/one/screen-twelve-level-one/screen-twelve-level-one.component';
import { ScreenThirteenLevelOneComponent } from './components/levels/one/screen-thirteen-level-one/screen-thirteen-level-one.component';
import { ScreenFourLevelThreeComponent } from './components/levels/three/screen-four-level-three/screen-four-level-three.component';
import { ScreenOneLevelThreeComponent } from './components/levels/three/screen-one-level-three/screen-one-level-three.component';
import { ScreenThreeLevelThreeComponent } from './components/levels/three/screen-three-level-three/screen-three-level-three.component';
import { ScreenTwoLevelThreeComponent } from './components/levels/three/screen-two-level-three/screen-two-level-three.component';
import { ScreenFourLevelTwoComponent } from './components/levels/two/screen-four-level-two/screen-four-level-two.component';
import { ScreenFiveLevelTwoComponent } from './components/levels/two/screen-five-level-two/screen-five-level-two.component';
import { ScreenSixLevelTwoComponent } from './components/levels/two/screen-six-level-two/screen-six-level-two.component';
import { ScreenOneLevelTwoComponent } from './components/levels/two/screen-one-level-two/screen-one-level-two.component';
import { ScreenThreeLevelTwoComponent } from './components/levels/two/screen-three-level-two/screen-three-level-two.component';
import { ScreenTwoLevelTwoComponent } from './components/levels/two/screen-two-level-two/screen-two-level-two.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'fases', component: LevelSelectionComponent},
  {path: 'fase-1-1', component: ScreenOneLevelOneComponent},
  {path: 'fase-1-2', component: ScreenTwoLevelOneComponent},
  {path: 'fase-1-3', component: ScreenThreeLevelOneComponent},
  {path: 'fase-1-4', component: ScreenFourLevelOneComponent},
  {path: 'fase-1-5', component: ScreenFiveLevelOneComponent},
  {path: 'fase-1-6', component: ScreenSixLevelOneComponent},
  {path: 'fase-1-7', component: ScreenSevenLevelOneComponent},
  {path: 'fase-1-8', component: ScreenEightLevelOneComponent},
  {path: 'fase-1-9', component: ScreenNineLevelOneComponent},
  {path: 'fase-1-10', component: ScreenTenLevelOneComponent},
  {path: 'fase-1-11', component: ScreenElevenLevelOneComponent},
  {path: 'fase-1-12', component: ScreenTwelveLevelOneComponent},
  {path: 'fase-1-13', component: ScreenThirteenLevelOneComponent},
  {path: 'fase-2-1', component: ScreenOneLevelTwoComponent},
  {path: 'fase-2-2', component: ScreenTwoLevelTwoComponent},
  {path: 'fase-2-3', component: ScreenThreeLevelTwoComponent},
  {path: 'fase-2-4', component: ScreenFourLevelTwoComponent},
  {path: 'fase-2-5', component: ScreenFiveLevelTwoComponent},
  {path: 'fase-2-6', component: ScreenSixLevelTwoComponent},
  {path: 'fase-3-1', component: ScreenOneLevelThreeComponent},
  {path: 'fase-3-2', component: ScreenTwoLevelThreeComponent},
  {path: 'fase-3-3', component: ScreenThreeLevelThreeComponent},
  {path: 'fase-3-4', component: ScreenFourLevelThreeComponent},
  {path: 'fase-4-1', component: ScreenOneLevelFourComponent},
  {path: 'fase-4-2', component: ScreenTwoLevelFourComponent},
  {path: 'fase-4-3', component: ScreenThreeLevelFourComponent},
  {path: 'fase-4-4', component: ScreenFourLevelFourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
