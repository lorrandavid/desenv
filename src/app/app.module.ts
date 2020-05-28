import { SharedModule } from './shared/shared.module';
import { ConsultaService } from './shared/service/consulta.service';
import { BehaviorService } from './shared/service/behavior.service';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/ui/header/header.component';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';
import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TableComponent } from './shared/components/ui/table/table.component';
import { NgxMaskModule } from 'ngx-mask';
import { GeradorComponent } from './gerador/gerador.component';
import { ValidadorComponent } from './validador/validador.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './shared/service/login.service';
import { AuthGuardService } from './shared/service/guards/auth-guard.service';
import { StateModule } from './state/state.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { AuthModule } from './auth/auth.module';


registerLocaleData(ptBr);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnderecosListComponent,
    BuscaEnderecosComponent,
    GeradorComponent,
    ValidadorComponent,
    LoginComponent
  ],
  imports: [
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    StateModule,
    HttpClientModule,
    SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })

  ],
  exports: [
    BrowserAnimationsModule,
    HeaderComponent,
    EnderecosListComponent,
    BuscaEnderecosComponent,
    TableComponent,
    NgxMaskModule,
    SharedModule
  ],
  providers: [
  ConsultaService,
  BehaviorService,
  LoginService,
  AuthGuardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
