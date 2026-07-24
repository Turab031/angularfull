import { Routes } from '@angular/router';
import { Controllflow } from './components/controllflow/controllflow';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Attribute } from './components/attribute/attribute';
import { Notfound } from './components/notfound/notfound';
import { Photos } from './components/photos/photos';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'databinding',
    pathMatch: 'full',
  },
  {
    path: 'controllflow',
    component: Controllflow,
  },
  {
    path: 'databinding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: Signal,
  },
  {
    path: 'attribute',
    component: Attribute,
  },

  {
    path:'photos',
    component:Photos
    
  },
  // agr aise jo exisst nhi  krta use wildcard se handel
  {
    path:'**',
    component:Notfound

  }

];
