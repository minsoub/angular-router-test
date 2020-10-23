import { NgModule } from '@angular/core';
import { Routes, ActivatedRoute, RouterModule } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  { path: 'first-component', 
    component: FirstComponent, // this is the component with the <router-oulet> in the template
    children: [
      {
        path: 'child-a',  // child route path
        component: ChildAComponent,  // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  }, 
  { path: 'second-component', component: SecondComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full'}, // redirect to 'first-component'
  { path: '**', component: PagenotfoundComponent},   // Wildcard route for a 404 page
];  // Set up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
