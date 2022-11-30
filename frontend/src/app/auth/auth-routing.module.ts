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
        component: RegisterComponent
    },
    {
        path: 'login',
        canActivate: [AuthActivate],
        component: LoginComponent
    },
    {
        path: 'logout',
        canActivate: [AuthActivate],
        component: LogoutComponent
    },
    {
        path: 'profile',
        canActivate: [AuthActivate],
        component: ProfileComponent
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);