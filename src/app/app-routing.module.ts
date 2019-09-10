import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { WriteComponent } from './write/write.component';


const routes: Routes = [  
  {  
    path: 'about',  
    component: AboutComponent  
  },
  {  
    path: 'faq',  
    component: FaqComponent  
  },
  {  
    path: 'write',  
    component: WriteComponent  
  },
  {  
    path: '',  
    component: HomeComponent  
  },
  { path: '**',  
  	redirectTo: ''
  }

];  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  

export class AppRoutingModule { }
