import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCrudComponent } from 'app/user-crud/user-crud.component';

const routes: Routes = [
    {path: 'crud', component: UserCrudComponent   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
