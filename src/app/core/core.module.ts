import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent, SuggestComponent } from './components';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SuggestComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  exports: [LayoutComponent],
  providers:[
  ]
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
}

