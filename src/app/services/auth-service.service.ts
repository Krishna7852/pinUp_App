import {	Http, Headers}	from	'@angular/http';
import {	Injectable	}	from	'@angular/core';
import { Router } from '@angular/router';
import 'rxjs';
@Injectable()
export class AuthService {
  private baseUrl = 'http://192.168.0.40:3000';
  public email: any;
  public selectedDomain:any;
		constructor(private http: Http, private router: Router) {}

  onRegisterAdmin(user) {
    this.email = user.emailAddress;
    console.log(this.email)
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
      localStorage.setItem('token', response.json().token);
      this.router.navigate(['/admin',this.selectedDomain]);
    //   console.log(response)
      alert(response.json().description);
    },
      error => {
        // alert(error.text());
        console.log(error.text());
      }
    );
  }
  logout() {
     this.router.navigate(['/login']);
 }



  onSubDomain(domain) {
    return this.http.post(this.baseUrl + '/admin/register/domain', domain, this.email).subscribe((res: any) => {
      let subDomain = res.json();
      console.log(subDomain)

      if (subDomain.success == true) {
        // alert(subDomain.message);
        this.router.navigate(['/login']);
        // alert(subDomain.message);
      }
      else {
        alert(subDomain.message);
      }
      this.selectedDomain =subDomain.domainRedirection;
  // this.router.navigate(['/login']);
    });
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
