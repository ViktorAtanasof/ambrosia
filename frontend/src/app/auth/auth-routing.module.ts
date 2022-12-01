import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'register',
        canActivate: [AuthActivate],
        component: RegisterComponent,
        data: {
            loginRequired: false
        }
    },
    {
        path: 'login',
        canActivate: [AuthActivate],
        component: LoginComponent,
        data: {
            loginRequired: false
        }
    },
    {
        path: 'logout',
        canActivate: [AuthActivate],
        component: LogoutComponent,
        data: {
            loginRequired: true
        }
    },
    {
        path: 'profile',
        canActivate: [AuthActivate],
        component: ProfileComponent,
        data: {
            loginRequired: true
        }
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);