import { Routes } from '@angular/router';
import { HomePage } from './pages/Home/home.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { NotPageFoundPage } from './pages/NotPageFound/NotPageFound.page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePage,
    pathMatch: 'full',
  },
  {
    path: 'projects',
    component: ProjectsPage,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotPageFoundPage,
  },
];
