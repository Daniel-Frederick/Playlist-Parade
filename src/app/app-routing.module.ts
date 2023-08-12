import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: 'help', component: HelpComponent },
  { path: '', component: ProfileListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
