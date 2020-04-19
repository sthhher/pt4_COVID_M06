/*   
  @name = AppRouting Module TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript of the AppRouting Module
  @date = 19-04-2020 */

  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
