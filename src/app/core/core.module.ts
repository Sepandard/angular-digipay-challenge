import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent, SuggestComponent } from './components';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APPLICATION_CONFIG } from './tokens/tokens';
import { DigipayApplicationConfig } from './tokens/application.config';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthHttpInterceptor } from './interceptor/auth.http-interceptor';

@NgModule({
  declarations: [LayoutComponent, SuggestComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, NgOptimizedImage, HttpClientModule],
  exports: [LayoutComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded in app module. Import only in AppModule'
      );
    }
  }

  static forRoot(
    config: DigipayApplicationConfig
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [{ provide: APPLICATION_CONFIG, useValue: config }],
    };
  }
}
