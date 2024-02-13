import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuLateralComponent } from "./componentes/menu-lateral/menu-lateral.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <mat-toolbar class="mat-elevation-z3">
      <button mat-icon-button (click)="colapsar.set(!colapsar())">
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>

    <mat-sidenav-container>
      <mat-sidenav opened mode="side" [style.width]="ancho()">
      <app-menu-lateral [colapsado]="colapsar()"/>  
      </mat-sidenav>
      <mat-sidenav-content class="content" [style.margin-left]="ancho()">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
    styles: [
        `
      mat-toolbar {
        position: relative;
        z-index: 5;
      }
      .content {
        padding: 24px;
      }

      mat-sidenav-container {
        height: calc(100vh - 64px);
      }
    `,
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MenuLateralComponent
    ]
})
export class AppComponent {

colapsar = signal(false)
ancho = computed(() => this.colapsar() ? '65px' : '250px');
}
