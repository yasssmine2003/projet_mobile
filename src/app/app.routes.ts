import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.page').then(m => m.WelcomePage)
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
      },
      {
        path: 'client-register',
        loadComponent: () => import('./pages/client-register/client-register.page').then(m => m.ClientRegisterPage)
      },
      {
        path: 'freelancer-register',
        loadComponent: () => import('./pages/freelancer-register/freelancer-register.page').then(m => m.FreelancerRegisterPage)
      }
    ]
  },
  {
    path: 'post-job',
    loadComponent: () => import('./pages/pages/post-job/post-job.page').then( m => m.PostJobPage)
  }
  

];