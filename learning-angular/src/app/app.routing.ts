//Import routing modules of angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Import components

import { HomeComponent } from "./home/home.component";
import { ShoesComponent } from "./shoes/shoes.component";
import { VideogameComponent } from "./videogame/videogame.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternalComponent } from "./external/external.component";

//Array of routes

const appRoutes: Routes = [
    { path:'', component: HomeComponent},
    { path:'Home', component: HomeComponent},
    { path:'shoe', component: ShoesComponent},
    { path:'videogame', component: VideogameComponent},
    { path:'cursos', component: CursosComponent},
    { path:'cursos/:name', component: CursosComponent},
    { path:'external', component: ExternalComponent},
    { path:'**' , component: HomeComponent}
   


];
// Export routing module
export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);