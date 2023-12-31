// Angular core modules
import { NgModule } from '@angular/core';

// Angular platform browser modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime NG modules
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

// App related modules
import { AppComponent } from 'src/app/app.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { MenuComponent } from 'src/app/shared/layout/menu/menu.component';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';
import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { UserIdleModule } from 'angular-user-idle';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppCommonModule } from 'src/app/app.common.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserIdleModule.forRoot({ idle: 300, timeout: 1, ping: null }),
    HttpClientModule,
    AppCommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MenubarModule
  ],
  exports: [TranslateModule],
  providers: [
    MessageService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
