import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCrudComponent } from './user-crud/';

const routes: Routes = [
    {path: 'crud', component: UserCrudComponent    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
