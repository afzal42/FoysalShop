import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShopComponent } from './layouts/shop/shop.component';

import { ShopModule } from './layouts/shop/shop.module';

import { LayoutsModule } from './layouts';
import { CommonLayoutComponent } from './layouts/common-layout';
import { ChartsComponent } from './pages/charts';
import { ComponentsComponent } from './pages/components';
import { DashboardComponent } from './pages/dashboard';
import { Dashboard2Component } from './pages/dashboard2';
import { FormsComponent } from './pages/forms';


import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ProductComponent } from './shop/product/product.component';
import { CartComponent } from './shop/cart/cart.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';


@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
        {
          path: 'shop',
          component: ShopComponent,
          children: [
            {
              path: 'home',
              component: ShopHomeComponent
            },
            {
              path: 'product',
              component: ProductComponent
            },
            {
              path: 'product-detail',
              component: ProductDetailComponent
            },
            {
              path: 'cart',
              component: CartComponent
            }
          ]
        },
        { path: 'app', component: CommonLayoutComponent, children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
          { path: 'dashboard-custom', component: Dashboard2Component, pathMatch: 'full' },
          { path: 'forms', component: FormsComponent, pathMatch: 'full' },
          { path: 'charts', component: ChartsComponent, pathMatch: 'full' },
          { path: 'components', component: ComponentsComponent, pathMatch: 'full' },
          { path: '**', redirectTo: '/pages/404' },
        ] }, // add 'canActivate: AuthGuard' for catching unauth users
        { path: 'ui', loadChildren: './pages/ui/ui.module#UIModule' },
        { path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule' },
        { path: 'pages', loadChildren: './pages/pages/pages.module#PagesModule' },
        { path: '**', redirectTo: '/pages/404' },
      ],
      { useHash: false },
    ),
    ShopModule,
    LayoutsModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
