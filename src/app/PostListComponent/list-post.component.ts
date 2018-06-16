import {Component, Input, OnInit, ɵEMPTY_ARRAY} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  @Input() tabPost ;
  constructor() { }

  ngOnInit() {
  }

}
