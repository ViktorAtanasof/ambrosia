import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { 
    AngularFireAuthGuard,
    redirectLoggedInTo,
    redirectUnauthorizedTo 
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectAuthorizedTo = () => redirectLoggedInTo(['/']);

const routes: Routes = [
    {
        path: 'register',
        canActivate: [AngularFireAuthGuard],
        component: RegisterComponent,
        data: {
            authGuardPipe: redirectAuthorizedTo
        }
    },
    {
        path: 'login',
        canActivate: [AngularFireAuthGuard],
        component: LoginComponent,
        data: {
            authGuardPipe: redirectAuthorizedTo
        }
    },
    {
        path: 'logout',
        canActivate: [AngularFireAuthGuard],
        component: LogoutComponent,
        data: {
            authGuardPipe: redirectUnauthorizedToLogin
        }
    },
    {
        path: 'profile',
        canActivate: [AngularFireAuthGuard],
        component: ProfileComponent,
        data: {
            authGuardPipe: redirectUnauthorizedToLogin
        }
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);