import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';

const routes = [{
    path: 'layout', component: LayoutComponent, matchPath : 'full' ,  children: [
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'service', component: ServiceComponent },
            { path: 'portfolio', component: PortfolioComponent },        
    ] }, 
];

export const ROUTE = RouterModule.forRoot(routes);