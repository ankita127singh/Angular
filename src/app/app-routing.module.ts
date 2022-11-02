import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ReadblogComponent } from './readblog/readblog.component';
import { UserformComponent } from './userform/userform.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewblogsComponent } from './viewblogs/viewblogs.component';

const routes: Routes = [
  {path: '', redirectTo: '/viewblogs', pathMatch: 'full'},
  {path:'Contact',component:ContactComponent},
  {path:'viewblogs',component:ViewblogsComponent},
  {path:"Admin",component:AdminComponent},
  {path:"list",component:UserlistComponent},
  {path:"list/adduser",component:UserformComponent},
  {path:"editblog",component:EdituserComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"readblog", component:ReadblogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
