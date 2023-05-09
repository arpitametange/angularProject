import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponenet } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { TestComponent2 } from './test3/test.component';
import { Test4Component } from './test4/test4.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { Password1Component } from './password1/password1.component';
import { PwdComponent } from './pwd/pwd.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import DirectiveAssiComponent from './directive-assi/directive-assi.component';
import { NgForAssiComponent } from './ng-for-assi/ng-for-assi.component';
import { PracticeOtherComponent } from './practice-other/practice-other.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { CustomDirective } from './custom.directive';
import { StructuralDirectivesAssiComponent } from './structural-directives-assi/structural-directives-assi.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponenet,
    Test2Component,
    TestComponent2,
    Test4Component,
    DatabindingComponent,
    Password1Component,
    PwdComponent,
    NgIfComponent,
    NgforComponent,
    NgSwitchComponent,
    DirectiveAssiComponent,
    NgForAssiComponent,
    PracticeOtherComponent,
    NgstyleComponent,
    NgClassComponent,
    CustomDirective,
    StructuralDirectivesAssiComponent,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
