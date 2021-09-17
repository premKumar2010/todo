import {NgModule}                     from '@angular/core';
import {FormsModule}                  from '@angular/forms';
import {MatButtonModule}              from '@angular/material/button';
import {MatCardModule}                from '@angular/material/card';
import {MatFormFieldModule}           from '@angular/material/form-field';
import {MatInputModule}               from '@angular/material/input';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'
import {BrowserModule}                from '@angular/platform-browser';

import {AppComponent}            from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent}         from './header/header.component';
import {ListsComponent}          from './lists/lists.component';
import {FormComponent}           from './form/form.component';
import { PostS } from './core/services/posts.service';

@NgModule({
	          declarations: [
		          AppComponent,
		          HeaderComponent,
		          ListsComponent,
		          FormComponent
	          ],
	          imports     : [
		          BrowserModule,
		          BrowserAnimationsModule,
		          MatToolbarModule,
		          MatCardModule,
		          MatInputModule,
		          MatFormFieldModule,
		          MatButtonModule,
              MatExpansionModule,
		          FormsModule
	          ],
	          providers   : [PostS],
	          bootstrap   : [AppComponent]
          })
export class AppModule{}
