import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserformComponent } from './userform/userform.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { CustomerModule } from './customer/customer.module';
import { Highlight } from './shared/mydirective';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './search.pipe';
import { HomeViewComponent } from './home-view/home-view.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ReadblogComponent } from './readblog/readblog.component';
import { AdminComponent } from './admin/admin.component';
import { ViewblogsComponent } from './viewblogs/viewblogs.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserformComponent,
    EdituserComponent,
    DetailsComponent,
    HeaderComponent,
    SearchPipe,
    HomeViewComponent,
    LeftNavComponent,
    ReadblogComponent,
    AdminComponent,
    ViewblogsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
    CustomerModule,
    SharedModule,
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
