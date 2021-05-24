import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'list', component: ListComponent, canActivate: [ AuthGuard ] },
      {path: 'login', component: LoginComponent },
      {path: 'create', component: CreateComponent, canActivate: [ AuthGuard ] },
      {path: 'update', component: UpdateComponent, canActivate: [ AuthGuard ] },
      {path: 'delete', component: DeleteComponent, canActivate: [ AuthGuard ] },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
