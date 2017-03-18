import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    myForm1: FormGroup;
  title = 'app works!';
  topic: string = '';
  Card: any = [];
  CardObj: any;
  private myDomain: any;
  data: any;
  myAdmin: string;
  constructor(private auth: AuthService, private route: ActivatedRoute ,private fb: FormBuilder) {

  }

  addToCard(event): void {
      this.CardObj = {
      topic: this.topic
      // completed: false

    }
    this.auth.onPostTopic(this.CardObj);
    console.log('card ', this.CardObj);
    this.topic = '';

    event.preventDefault();
    location.reload();
  }
  removeTopic(index) {

var myid = {
  'topicID' :index
}
console.log('topicID1:-',myid)

    this.auth.onRemoveTopic(myid);
    this.Card.splice(index, 1);
    location.reload();
    
  }
  submit(id) {
    var myEditTopic = {
      'topic':this.myForm1.value,
      'topicID':id
    }
    this.auth.onUpdateTopic(myEditTopic);
    // console.log('editedID:-',id)
    location.reload();
  }
  onLogout() {
    this.auth.logout();
    localStorage.clear();
  }
  ngOnInit() {
    this.myForm1 = this.fb.group({
      topic: ['', Validators.compose([Validators.required])]
    })

      this.myAdmin = localStorage.getItem('username');

      console.log('myAdmin :-', this.myAdmin);
      this.auth.onGetTopic().subscribe((res: any) => {
      let getTopic = res.json();
      console.log('getTopic ',getTopic);
      this.Card = getTopic.topicData;
    })
      this.myDomain = this.route.params.subscribe(params => {
      this.data = params['a'];

      console.log('selected Subdomain :-', this.data)
    });
  }

}
