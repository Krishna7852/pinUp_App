import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app works!';
  topic: string = '';
  Card: any = [];
  CardObj: any;
  private myDomain: any;
  data: any;
  myAdmin: string;
  constructor(private auth: AuthService, private route: ActivatedRoute) {

  }

  addToCard(event): void {
      this.CardObj = {
      topic: this.topic
    }
    this.auth.onPostTopic(this.CardObj);
    console.log('card ', this.CardObj);
    this.topic = '';
    event.preventDefault();
    location.reload();
  }
  onLogout() {
    this.auth.logout();
    localStorage.clear();
  }
  ngOnInit() {
      this.myAdmin = localStorage.getItem('username');

      console.log('myAdmin :-', this.myAdmin);
      this.auth.onGetTopic().subscribe((res: any) => {
      let getTopic = res.json();
      console.log(getTopic);
      this.Card = getTopic.topicData;
    })
      this.myDomain = this.route.params.subscribe(params => {
      this.data = params['a'];

      console.log('selected Subdomain :-', this.data)
    });
  }

}
