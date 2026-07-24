import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Controllflow } from './components/controllflow/controllflow';
import { Attribute } from './components/attribute/attribute';
import { Photos } from './components/photos/photos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Photos,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tute');
}
