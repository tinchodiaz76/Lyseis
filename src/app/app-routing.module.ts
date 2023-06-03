import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// auth views

// no layouts views
import { IndexComponent } from "./views/index/index.component";


const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
