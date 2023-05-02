import { Component } from '@angular/core';
import { DialogsService } from './dialogs/dialogs.service';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'material-app',// need to check with sir, why we are using custom selector instaed of app-root?
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public result:any;
  title = 'assignment1YMMS';
  constructor(private dialogsService: DialogsService) { }
  public openDialog() {
    this.dialogsService.openModal();
  }
}
