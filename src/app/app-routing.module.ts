import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiographieComponent } from './pages/biographie/biographie.component';
import { CollaborationsComponent } from './pages/collaborations/collaborations.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { OeuvresComponent } from './pages/oeuvres/oeuvres.component';


const routes: Routes = [
  { path: 'biographie', component: BiographieComponent },
  { path: 'collaborations', component: CollaborationsComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'oeuvres', component: OeuvresComponent },
  { path: '**', redirectTo: 'biographie' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
