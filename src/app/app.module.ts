import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LevelSelectionComponent } from './components/level-selection/level-selection.component';
import { ScreenOneLevelOneComponent } from './components/levels/one/screen-one-level-one/screen-one-level-one.component';
import { ScreenTwoLevelOneComponent } from './components/levels/one/screen-two-level-one/screen-two-level-one.component';
import { ScreenThreeLevelOneComponent } from './components/levels/one/screen-three-level-one/screen-three-level-one.component';
import { ScreenFourLevelOneComponent } from './components/levels/one/screen-four-level-one/screen-four-level-one.component';
import { ToastContainer } from './components/levels/toast-container.component';
import { ScreenOneLevelTwoComponent } from './components/levels/two/screen-one-level-two/screen-one-level-two.component';
import { ScreenTwoLevelTwoComponent } from './components/levels/two/screen-two-level-two/screen-two-level-two.component';
import { ScreenThreeLevelTwoComponent } from './components/levels/two/screen-three-level-two/screen-three-level-two.component';
import { ScreenFourLevelTwoComponent } from './components/levels/two/screen-four-level-two/screen-four-level-two.component';
import { ScreenOneLevelThreeComponent } from './components/levels/three/screen-one-level-three/screen-one-level-three.component';
import { ScreenTwoLevelThreeComponent } from './components/levels/three/screen-two-level-three/screen-two-level-three.component';
import { ScreenThreeLevelThreeComponent } from './components/levels/three/screen-three-level-three/screen-three-level-three.component';
import { ScreenFourLevelThreeComponent } from './components/levels/three/screen-four-level-three/screen-four-level-three.component';
import { ScreenOneLevelFourComponent } from './components/levels/four/screen-one-level-four/screen-one-level-four.component';
import { ScreenTwoLevelFourComponent } from './components/levels/four/screen-two-level-four/screen-two-level-four.component';
import { ScreenThreeLevelFourComponent } from './components/levels/four/screen-three-level-four/screen-three-level-four.component';
import { ScreenFourLevelFourComponent } from './components/levels/four/screen-four-level-four/screen-four-level-four.component';
import { ScreenFiveLevelOneComponent } from './components/levels/one/screen-five-level-one/screen-five-level-one.component';
import { ScreenSixLevelOneComponent } from './components/levels/one/screen-six-level-one/screen-six-level-one.component';
import { ScreenSevenLevelOneComponent } from './components/levels/one/screen-seven-level-one/screen-seven-level-one.component';
import { ScreenEightLevelOneComponent } from './components/levels/one/screen-eight-level-one/screen-eight-level-one.component';
import { ScreenNineLevelOneComponent } from './components/levels/one/screen-nine-level-one/screen-nine-level-one.component';
import { ScreenTenLevelOneComponent } from './components/levels/one/screen-ten-level-one/screen-ten-level-one.component';
import { ScreenElevenLevelOneComponent } from './components/levels/one/screen-eleven-level-one/screen-eleven-level-one.component';
import { ScreenTwelveLevelOneComponent } from './components/levels/one/screen-twelve-level-one/screen-twelve-level-one.component';
import { ScreenThirteenLevelOneComponent } from './components/levels/one/screen-thirteen-level-one/screen-thirteen-level-one.component';
import { ScreenFiveLevelTwoComponent } from './components/levels/two/screen-five-level-two/screen-five-level-two.component';
import { ScreenSixLevelTwoComponent } from './components/levels/two/screen-six-level-two/screen-six-level-two.component';
import { ScreenFiveLevelThreeComponent } from './components/levels/three/screen-five-level-three/screen-five-level-three.component';
import { ScreenSixLevelThreeComponent } from './components/levels/three/screen-six-level-three/screen-six-level-three.component';
import { ScreenSevenLevelThreeComponent } from './components/levels/three/screen-seven-level-three/screen-seven-level-three.component';
import { ScreenEightLevelThreeComponent } from './components/levels/three/screen-eight-level-three/screen-eight-level-three.component';
import { ScreenNineLevelThreeComponent } from './components/levels/three/screen-nine-level-three/screen-nine-level-three.component';
import { ScreenTenLevelThreeComponent } from './components/levels/three/screen-ten-level-three/screen-ten-level-three.component';
import { ScreenElevenLevelThreeComponent } from './components/levels/three/screen-eleven-level-three/screen-eleven-level-three.component';
import { ScreenFiveLevelFourComponent } from './components/levels/four/screen-five-level-four/screen-five-level-four.component';
import { ScreenSixLevelFourComponent } from './components/levels/four/screen-six-level-four/screen-six-level-four.component';
import { ScreenSevenLevelFourComponent } from './components/levels/four/screen-seven-level-four/screen-seven-level-four.component';
import { ScreenNineLevelFourComponent } from './components/levels/four/screen-nine-level-four/screen-nine-level-four.component';
import { ScreenTenLevelFourComponent } from './components/levels/four/screen-ten-level-four/screen-ten-level-four.component';
import { ScreenElevenLevelFourComponent } from './components/levels/four/screen-eleven-level-four/screen-eleven-level-four.component';
import { ScreenEightLevelFourComponent } from './components/levels/four/screen-eight-level-four/screen-eight-level-four.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HelpComponent } from './components/help/help.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LevelSelectionComponent,
    ScreenOneLevelOneComponent,
    ScreenTwoLevelOneComponent,
    ScreenThreeLevelOneComponent,
    ScreenFourLevelOneComponent,
    ToastContainer,
    ScreenOneLevelTwoComponent,
    ScreenTwoLevelTwoComponent,
    ScreenThreeLevelTwoComponent,
    ScreenFourLevelTwoComponent,
    ScreenOneLevelThreeComponent,
    ScreenTwoLevelThreeComponent,
    ScreenThreeLevelThreeComponent,
    ScreenFourLevelThreeComponent,
    ScreenOneLevelFourComponent,
    ScreenTwoLevelFourComponent,
    ScreenThreeLevelFourComponent,
    ScreenFourLevelFourComponent,
    ScreenFiveLevelOneComponent,
    ScreenSixLevelOneComponent,
    ScreenSevenLevelOneComponent,
    ScreenEightLevelOneComponent,
    ScreenNineLevelOneComponent,
    ScreenTenLevelOneComponent,
    ScreenElevenLevelOneComponent,
    ScreenTwelveLevelOneComponent,
    ScreenThirteenLevelOneComponent,
    ScreenFiveLevelTwoComponent,
    ScreenSixLevelTwoComponent,
    ScreenFiveLevelThreeComponent,
    ScreenSixLevelThreeComponent,
    ScreenSevenLevelThreeComponent,
    ScreenEightLevelThreeComponent,
    ScreenNineLevelThreeComponent,
    ScreenTenLevelThreeComponent,
    ScreenElevenLevelThreeComponent,
    ScreenFiveLevelFourComponent,
    ScreenSixLevelFourComponent,
    ScreenSevenLevelFourComponent,
    ScreenNineLevelFourComponent,
    ScreenTenLevelFourComponent,
    ScreenElevenLevelFourComponent,
    ScreenEightLevelFourComponent,
    NotificationComponent,
    HelpComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
