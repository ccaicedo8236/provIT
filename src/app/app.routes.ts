import { Routes } from '@angular/router';
import { ProveedoresComponent } from './paginas/proveedores/proveedores.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { CotizacionesComponent } from './paginas/cotizaciones/cotizaciones.component';
import { AutorizacionesComponent } from './paginas/autorizaciones/autorizaciones.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { InicioComponent }  from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: InicioComponent
        //redirectTo: '../paginas/inicio' 
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'proveedores',
        component: ProveedoresComponent
    },
    {
        path: 'productos',
        component: ProductosComponent
    },
    {
        path: 'cotizaciones',
        component: CotizacionesComponent
    },
    {
        path: 'autorizaciones',
        component: AutorizacionesComponent
    },
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
];
