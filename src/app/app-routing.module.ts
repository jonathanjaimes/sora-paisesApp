import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', //Hace que la ruta sea dinámica y dependa del id del país consultado
        component: VerPaisComponent
    },
    {
        path: '**', //esta ruta dirige a un sitio específico en caso de que se coloque una url distinta a alguna de las anteriores
        redirectTo: '' //Redirecciona a la ruta principál
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes) //en el argumento pide unas rutas de tipo Routes
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}