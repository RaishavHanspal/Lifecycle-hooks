import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [{ path : 'First', component : FirstComponent},
{ path : 'Second', component : SecondComponent},
];

@NgModule({
  declarations:[
    FirstComponent,
    SecondComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FirstComponent,
    SecondComponent]
})
export class AppRoutingModule { }
