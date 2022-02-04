import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule //Se debe importar para poder usar las rutas al momento de pasar el código del componente principal al componente sidebar
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
