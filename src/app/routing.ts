import	{	RouterModule,	Routes	}	from	'@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './home/category/category.component';
import { DisplayComponent } from './home/display/display.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './services/authGuard';
const	routes:	Routes	=	[
		{	path:	'',	component:	RegistrationComponent	},
		{	path:	'sub-domain',	component:	SubDomainComponent	},
    {	path:	'login',	component:	LogInComponent	},

    {	path:	'admin/:a',	component:	HomeComponent,
		canActivate: [AuthGuard],
children : [
  //  {	path:	'',	component:	HomeComponent	},
  {	path:	'category',	component:	CategoryComponent	},
  {	path:	'display',	component:	DisplayComponent	}
]
  	}

];
export	const	routing	=	RouterModule.forRoot(routes);
