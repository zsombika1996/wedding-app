import { Routes } from '@angular/router';
import { ProgramComponent } from './program/program.component';
import { MenuComponent } from './menu/menu.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path: 'program', component: ProgramComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'guest-book', component: GuestBookComponent},
    //////////////////////////////////////////////////
    { path: '', component: LandingPageComponent},  
    { path: '**', redirectTo: '/features' }
];
