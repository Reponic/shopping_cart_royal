import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CarComponent } from './car/car.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductComponent, canActivate: [AuthGuard]},
    {path: 'car', component: CarComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
