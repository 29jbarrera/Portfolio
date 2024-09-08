import { Routes } from '@angular/router';
import { HomePage } from './pages/Home/home.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { NotPageFoundPage } from './pages/NotPageFound/NotPageFound.page';
import { NavigationMenuComponent } from './pages/navigation-menu/navigation-menu.component';

export const routes: Routes = [
  {
    path: 'portfolio',
    component: NavigationMenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'projects',
        component: ProjectsPage,
      },
    ],
  },

  {
    path: '**',
    pathMatch: 'full',
    component: NotPageFoundPage,
  },
];
