import {Component, OnInit} from '@angular/core';
import {NgForm}            from '@angular/forms';
import { PostS } from '../core/services/posts.service';

@Component({
	           selector   : 'app-form',
	           templateUrl: './form.component.html',
	           styleUrls  : ['./form.component.css']
           })
export class FormComponent implements OnInit{

	constructor(private postService:PostS){ }

	ngOnInit(): void{
	}

	addList(form: NgForm){

this.postService.addPosts(form.value);

		console.log('form===>', form);

	}

}
