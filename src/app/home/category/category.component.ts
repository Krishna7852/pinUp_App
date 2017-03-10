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
  // console.log(name)
  // framework = 'Angular 2';
  //    options = [
  //        {
  //            name: 'krishna',
  //            label: 'JS',
  //            id: 0
  //        },
  //        {
  //            name: 'vaibhav',
  //            label: 'JK',
  //            id: 1
  //        }
  //    ];
  ngOnInit() {
  }

}
