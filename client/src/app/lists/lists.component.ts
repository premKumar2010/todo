import { Component, OnDestroy, OnInit } from '@angular/core';

import {TPost} from '../../../types/Types'

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit, OnDestroy {

  constructor() { }

   posts:Array<TPost>=[];


  ngOnInit(): void {
  }

ngOnDestroy(){

}



}
