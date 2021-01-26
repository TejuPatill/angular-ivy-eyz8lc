import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { UserlistComponent } from "./userlist/userlist.component";
import { UserComponent } from "./user/user.component";
import { from } from "rxjs";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "user",
    children: [
      {
        path: "list",
        component: UserlistComponent,
        children: [{ path: "details/:name", component: UserComponent }]
      }
    ]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    UserlistComponent,
    UserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
