import { Component, Input, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  template: `
    <div class="blateral-encabezado">
      <img [width]="foto()" [height]="foto()" src="/assets/usuario.jpg" />
      <div class="texto-cabecera" [class.esconder-texto-encabezado]="menuLateralColapsado()">
        <h2>Maria Fernanda Bravo</h2>
        <p>Administrador</p>
      </div>
    </div>
    <mat-nav-list>
      <a 
        mat-list-item 
        *ngFor="let item of menuItems()" 
        [routerLink]="item.route" 
        routerLinkActive 
        #rla="routerLinkActive" 
        [activated]="rla.isActive"
        >
        <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
        <span matListItemTitle *ngIf="!menuLateralColapsado()"> {{ item.label }}</span>
      </a>
    </mat-nav-list>
  `,
  styles: `
  .blateral-encabezado{
    padding-top: 24px;
    text-align: center;
    > img {
      border-radius: 100%;
      object-fit: cover;
      margin-bottom: 10px;
    }
  }
  .texto-cabecera{
    > h2{
      margin:0;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    >p{
      margin:0;
      font-size: 0.8rem;
    }
  }

  .esconder-texto-encabezado {
    opacity: 0;
    height: 0;
  }

  `,
})
export class MenuLateralComponent {

  menuLateralColapsado = signal(false);
@Input() set colapsado(val: boolean){
  this.menuLateralColapsado.set(val);
}
  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Inicio',
      route: 'inicio',
    },
    {
      icon: 'diversity_3',
      label: 'Proveedores',
      route: 'proveedores',
    },
    {
      icon: 'inventory_2',
      label: 'Productos',
      route: 'productos',
    },
    {
      icon: 'note_add',
      label: 'Cotizaciones',
      route: 'cotizaciones',
    },
    {
      icon: 'rule_folder',
      label: 'Autorizaciones',
      route: 'autorizaciones',
    },
    {
      icon: 'group',
      label: 'Usuarios',
      route: 'usuarios',
    },
    {
      icon: 'logout',
      label: 'Salida',
      route: 'login',
    },
  ]);

  foto = computed(()=>this.menuLateralColapsado() ? '32' : '100')
}
