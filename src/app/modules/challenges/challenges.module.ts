import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesItemComponent } from './components/challenges-item/challenges-item.component';
import { ChallengesPageComponent } from './components/challenges-page/challenges-page.component';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { AmountConverterPipe } from './pipes/amount-converter.pipe';
import { TimesLeftDirective } from './directives/times-left.directive';
import { CountdownDirective } from './directives/countdown.directive';

@NgModule({
  declarations: [
    ChallengesPageComponent,
    ChallengesItemComponent,
    AmountConverterPipe,
    TimesLeftDirective,
    CountdownDirective
  ],
  imports: [
    CommonModule,
    ChallengesRoutingModule
  ]
})
export class ChallengesModule { }
