import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./pages/ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'reestablecer-pass',
    loadChildren: () => import('./pages/reestablecer-pass/reestablecer-pass.module').then( m => m.ReestablecerPassPageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./pages/lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
