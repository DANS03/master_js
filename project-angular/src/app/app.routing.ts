import { createComponent, ModuleWithProviders } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailsComponent } from "./components/details/details.component";


const appRoutes: Routes = [
    { path : '' , component: AboutMeComponent},
    { path : 'about-me', component: AboutMeComponent }, 
    { path : 'projects' , component: ProjectsComponent },
    { path : 'create' , component : CreateComponent },
    { path : 'contact' , component : ContactComponent },
    { path : 'project/:id' , component : DetailsComponent },
    { path : '**' , component : ErrorComponent }


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);