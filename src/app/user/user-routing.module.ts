import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PrevSearchComponent } from "./components/prev-search/prev-search.component";

const userRoutes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
        children: [
            {
                path: "",
                component: ProfileComponent,
                pathMatch: "full"
            },
            {
                path: "searches",
                component: PrevSearchComponent,
                pathMatch: "full"
            },
            {
                path: "edit",
                component: EditProfileComponent,
                pathMatch: "full"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
