import	{	RouterModule,	Routes	}	from	'@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './home/category/category.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './services/authGuard';
const	routes:	Routes	=	[
		{	path:	'',	component:	RegistrationComponent	},
		{	path:	'subdomain',	component:	SubDomainComponent	},
    {	path:	'login',	component:	LogInComponent	},

    {	path:	'admin/:a',	component:	HomeComponent,
		canActivate: [AuthGuard],
children : [
  //  {	path:	'',	component:	HomeComponent	},
  {	path:	'category',	component:	CategoryComponent	}
]
  	}

];
export	const	routing	=	RouterModule.forRoot(routes);
