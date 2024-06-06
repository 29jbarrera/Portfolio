import { Routes } from '@angular/router';
import { HomePage } from './Home/home.page';
import { ProjectsPage } from './projects/projects.page';
import { NotPageFoundPage } from './NotPageFound/NotPageFound.page';

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
  