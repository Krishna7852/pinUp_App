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
  topic: string = '';
  Card: any = [];
  CardObj: any;
  private myDomain: any;
  // product: any;
  data: any;

  constructor(private auth: AuthService, private route: ActivatedRoute) {

  }

  addToCard(event):void {

  // console.log(this.topic)
    this.CardObj = {
      topic: this.topic
    }
    this.auth.onPostTopic(this.CardObj);

    console.log('card ',this.CardObj);
    // this.Card.push(this.CardObj);
    this.topic = '';
    event.preventDefault();
    location.reload();
  }
  onLogout() {
    this.auth.logout();
    localStorage.clear();
    // window.history.back();
  }
  ngOnInit() {
  // let myAdmin=  this.auth.onAdminUser();
  // console.log(myAdmin)
    this.auth.onGetTopic().subscribe((res: any) => {
        let getTopic = res.json();
        console.log(getTopic.topicData)

          this.Card = getTopic.topicData;

    })
    this.myDomain = this.route.params.subscribe(params => {
      this.data = params['a'];
      // this.product = JSON.parse(this.data);
      console.log(this.data)
    });
  }

}
