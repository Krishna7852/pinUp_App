import {	Http, Headers ,Response}	from	'@angular/http';
import {	Injectable	}	from	'@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import 'rxjs/Rx';
@Injectable()
export class AuthService {
  private topicUrl = 'http://192.168.0.6:3000';
  private baseUrl = 'http://192.168.0.3:3000';
  public email: any;
  public selectedDomain:any;
  public getToken:any;
  public myUser:string;
		constructor(private http: Http, private router: Router) {}

  onRegisterAdmin(user) {
    this.email = user.emailAddress;
    this.myUser = user.username;
    console.log(this.myUser)
    localStorage.setItem('username',this.myUser);

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let myJson = {
      'username': user.username,
      'emailAddress': user.emailAddress,
      'password': user.password
    }
    return this.http.post(this.baseUrl + '/admin/register', myJson, { headers: headers })
  }

  onLogin(loginUser) {
      return this.http.post(this.baseUrl + '/admin/signin', loginUser).subscribe(response => {
      this.getToken =response.json().token;
      console.log(this.getToken)
      localStorage.setItem('token',this.getToken );
      this.router.navigate(['admin',this.selectedDomain]);
      console.log(response)
      alert(response.json().description);
    },
      error => {
        console.log(error.text());
      }
    );
  }
  logout() {
     this.router.navigate(['/subdomain']);
 }

onSubDomain(domain) {
      return this.http.post(this.baseUrl + '/admin/register/domain', domain, this.email).subscribe((res: any) => {
      let subDomain = res.json();
      console.log(subDomain);
      if (subDomain.success == true) {
        // alert(subDomain.message);
        this.router.navigate(['/login']);
        // alert(subDomain.message);
      }
      else {
        alert(subDomain.message);
      }
      this.selectedDomain =subDomain.domainRedirection;

    });
  }

onPostTopic(topic) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-token',this.getToken);
    console.log('pstTopic',topic);
    return this.http.post(this.topicUrl+'/admin/addTopic',topic,{ headers: headers })
    .subscribe((res: any) => {
    let Topic = res.json();
    console.log(Topic);
    alert(topic.topic+' '+Topic.message);
})
}
onGetTopic() {
  var headers = new Headers();
  if(!this.getToken)
  {
    this.getToken=localStorage.getItem('token');
  }
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('x-token',this.getToken);

    return this.http.get(this.topicUrl+'/admin/getTopicList',{ headers: headers });;

}
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
}
skipIfLoggedIn(): void {
  if (this.isAuthenticated())
    this.router.navigate(['/admin',this.selectedDomain]);
  else
    this.router.navigate(['/login']);
}

}
