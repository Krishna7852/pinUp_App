import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// declare var $:JQueryStatic;
export class HomeComponent implements OnInit {
  title = 'app works!';
    newString: string = '';
     Card: any= [];
     CardObj: any;
private myDomain:any;
 // product: any;
data : any;
  constructor(private auth:AuthService, private route:ActivatedRoute) {

   }

   addToCard(event) {
     this.CardObj = {
       newString: this.newString
     }
        console.log(this.Card)
     this.Card.push(this.CardObj);
     this.newString = '';
     event.preventDefault();
   }
   onLogout() {
      this.auth.logout();
  localStorage.clear();
  // window.history.back();
  }
  ngOnInit() {
    this.myDomain = this.route.params.subscribe(params => {
      this.data = params['a'];
      // this.product = JSON.parse(this.data);
      console.log(this.data)
    });
  }

}
