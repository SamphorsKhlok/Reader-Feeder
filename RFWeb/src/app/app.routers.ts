import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';

const MY_ROUTES: Routes = [

  // end user pages
  {path : '', component: HomeComponent},
  // {path : 'register', component: RegisterComponent},
  // {path : 'error', component: ErrorComponent},
  // {path : 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  //
  // // admin pages
  // {path : 'event', component: EventComponent, canActivate: [AdminGuard]},
  // {path : 'user', component: UserComponent, canActivate: [AdminGuard]},
  // {path : 'dashboard', component: DashboardComponent},
  //
  // {path : 'login', component: LoginComponent},
  // // always has one for unidentifiable link
  // {path: '**', redirectTo:'/error'}
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
