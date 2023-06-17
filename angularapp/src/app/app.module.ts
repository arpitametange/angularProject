import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MaterialExampleModule} from '../material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponenet } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { TestComponent2 } from './test3/test.component';
import { Test4Component } from './test4/test4.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TemplateFAssiComponent } from './template-fassi/template-fassi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TemplateDrivenformComponent } from './template-drivenform/template-drivenform.component';
import { NgforpractassiComponent } from './ngforpractassi/ngforpractassi.component';
import { AngularMaterialTryComponent } from './angular-material-try/angular-material-try.component';
import { MatButtonToggleModule, MatCardImage, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { BothformComponent } from './bothform/bothform.component';
import { ReactiveformassiComponent } from './reactiveformassi/reactiveformassi.component';
import { ReactivecustomDirectiveDirective } from './reactivecustom-directive.directive';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import { DropdownBindingComponent } from './dropdown-binding/dropdown-binding.component';
import { DropdownBinding2Component } from './dropdown-binding2/dropdown-binding2.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { RapidCrickbuzzComponent } from './rapid-crickbuzz/rapid-crickbuzz.component';
import { CricketinfoComponent } from './cricketinfo/cricketinfo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { GiphyapiComponent } from './giphyapi/giphyapi.component';

import { PracticeformComponent } from './practiceform/practiceform.component';
import { SearchApiComponent } from './search-api/search-api.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UtilityModule } from './utility/utility.module';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './filter.pipe';
import { HooksComponent } from './hooks/hooks.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { HeadersInterceptorService } from './inteceptor/headers-interceptor.service';
import { RxjsComponent } from './rxjs/rxjs.component';
// import { PageListComponent } from './search-api/page-list/page-list.component';
// import { HeadersInterceptorService } from './interceptor/headers-interceptor.service';



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

    StructuralDirectivesAssiComponent,
    TemplateFormsComponent,
    TemplateFAssiComponent,
    TemplateDrivenformComponent,
    NgforpractassiComponent,
    AngularMaterialTryComponent,
    ReactiveFormComponent,
    ReactiveForm2Component,
    BothformComponent,
    ReactiveformassiComponent,
    ReactivecustomDirectiveDirective,
    Service1Component,
    Service2Component,
    PostComponent,
    TodoComponent,
    DropdownBindingComponent,
    DropdownBinding2Component,
    RapidapiComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    RapidCrickbuzzComponent,
    CricketinfoComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    LoginComponent,
    GiphyapiComponent,
    PracticeformComponent,
    SearchApiComponent,
    PostlistComponent,
    PostdetailsComponent,
    PipeComponent,
    FilterPipe,
    HooksComponent,
    RandomuserComponent,
    RxjsComponent,
    
    
    // PageListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    HttpClientModule,
    UtilityModule
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('AppModule called');
    
  }
}
