/*   
  @name = App Component TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript of the App component
  @date = 19-04-2020 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Second Hand';
  action = 0;
}
