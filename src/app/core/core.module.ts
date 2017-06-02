import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "app/ui/header/header.component";
import { RouterModule } from "@angular/router";
import { AuthService } from "app/core/auth/auth.service";
import { FirebaseResolver } from "app/core/firebase.resolver";
import { AuthModule } from "app/core/auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [
    AuthService,
    FirebaseResolver
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
