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
    path: 'recipes-regional',
    loadChildren: () => import('./recipes-regional/recipes-regional.module').then( m => m.RecipesRegionalPageModule)
  },
  {
    path: 'random-recipe',
    loadChildren: () => import('./random-recipe/random-recipe.module').then( m => m.RandomRecipePageModule)
  },
  {
    path: 'recipes-categories',
    loadChildren: () => import('./recipes-categories/recipes-categories.module').then( m => m.RecipesCategoriesPageModule)
  },
  {
    path: 'recipes-list/:type/:id',
    loadChildren: () => import('./recipes-list/recipes-list.module').then( m => m.RecipesListPageModule)
  },
  {
    path: 'recipe-view/:id',
    loadChildren: () => import('./recipe-view/recipe-view.module').then( m => m.RecipeViewPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
