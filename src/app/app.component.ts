import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private router: Router,
              private alertController: AlertController) {}

  clickProfile(){
    this.router.navigate(['/profile']);
  }

  clickAttendance(){
    this.router.navigate(['/attendance']);
  }

  clickPending(){
    this.router.navigate(['/pending']);
  }

  async clickLogout(){
    console.log("LOGOUT");
    const alert = await this.alertController.create({
      header: "Confirmation",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          text: "Cancel",
          role: 'cancel',
        },
        {
          text: "OK",
          role: 'confirm',
          handler: () => {
            
            this.router.navigate(['/home']);
          }
        },
      ],
    });

    await alert.present();
  }

  
}
