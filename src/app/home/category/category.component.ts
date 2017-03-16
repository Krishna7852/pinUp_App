import { Component, OnInit ,Input} from '@angular/core';
// import { Ng2SelectModule } from 'ng2-material-select';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
@Input() Category:string;

  constructor() {

  }
  ngOnInit() {
  }

}
