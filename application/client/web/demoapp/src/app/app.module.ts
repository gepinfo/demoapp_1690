import { VaultadminModule } from './vaultadmin/vaultadmin.module';
import { UserModule } from './user/user.module';
import { ManagecontrolModule } from './managecontrol/managecontrol.module';
import { ManageusersModule } from './manageusers/manageusers.module';
import { ManagerolesModule } from './manageroles/manageroles.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { HomeModule } from './home/home.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { SefscreenModule } from './sefscreen/sefscreen.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
                import * as AllIcons from '@ant-design/icons-angular/icons';
                import { IconDefinition } from '@ant-design/icons-angular';
                import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
                import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslatorModule } from './translator/translator.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { TemplateModule } from './template/template.module';
import { SharedService } from '../shared/shared.service';
import { AdminModule } from './admin/admin.module';


const antDesignIcons = AllIcons as { [key: string]: IconDefinition; };
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
            AppComponent
],
  imports: [
VaultadminModule,
UserModule,
ManageusersModule,
AuthorizationModule,
HomeModule,
SignupModule,
LoginModule,
  SefscreenModule,
FormsModule,
HttpClientModule,
VaultadminModule,
ManagecontrolModule,
ManageusersModule,
ManagerolesModule,
AuthorizationModule,
TemplateModule,
FooterModule,
HeaderModule,
TranslatorModule,
AppRoutingModule,
BrowserAnimationsModule,
      BrowserModule,
  AdminModule
],
  providers: [
      	SharedService,
                { provide: NZ_I18N useValue: en_US }

              ,{ provide: NZ_ICONS, useValue: icons },
              { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }