import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "maps",
    loadChildren: () => import("./maps/maps.module").then((m) => m.MapsModule),
  },
  // CUALQUIER OTRA DIRECCION QUE SEA ERRONEA QUE ME REDIRIJA A /MAPS
  {
    path: "**",
    redirectTo: "maps",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
