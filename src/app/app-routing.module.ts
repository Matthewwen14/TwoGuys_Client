import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoGuysComponent } from './two-guys/two-guys/two-guys.component';

const routes: Routes = [{ path: '**', component: TwoGuysComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
