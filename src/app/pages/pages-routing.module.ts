import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminPanelComponent } from '../shared/admin-panel/admin-panel.component';
import { ListarCategoriasComponent } from './administrar-categorias/listar-categorias/listar-categorias.component';
import { ListarProductosComponent } from './administrar-productos/listar-productos/listar-productos.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent, title: 'Login' },
    {
        path: 'admin-panel',
        component: AdminPanelComponent,
        title: 'Admin Panel | UPeU',
        children: [
            { path: 'administrar-categorias', component: ListarCategoriasComponent, title: 'Administrar categorías' },
            { path: 'administrar-productos', component: ListarProductosComponent, title: 'Administrar productos'},            
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
