import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'national-dex',
    loadChildren: () => import('./national-dex/national-dex.module').then( m => m.NationalDexPageModule)
  },
  {
    path: 'personal-dex',
    loadChildren: () => import('./personal-dex/personal-dex.module').then( m => m.PersonalDexPageModule)
  },
  {
    path: 'team-builder',
    loadChildren: () => import('./team-builder/team-builder.module').then( m => m.TeamBuilderPageModule)
  },
  {
    path: 'pokemon-details',
    loadChildren: () => import('./pokemon-details/pokemon-details.module').then( m => m.PokemonDetailsPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
