import { Component } from '@angular/core';
import { ModelService } from '../services/model.service';
// import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 user: any;
 pass:any;
  constructor(
    private modelService: ModelService
    // public alertController: AlertController
  ) {}
  getData(): void{
    
  console.log('getData')
  this.modelService.getFirestoreData();
}
  login(): void {
this.modelService.signInAnonymously();
this.display();
  }
  logout(): void {
this.modelService.logoutUser();
  }

  signUp(): void {
    this.modelService.signUp();
  }
  
  display() {
    document.getElementById("bot").style.display= "none";
    document.getElementById("tabs").style.display = "";
    
  }

  // async loginAlert() {
    
  //   const alert = await this.alertController.create({
  //     header: 'Login',
  //     subHeader: '',
  //     inputs: [
  //       {
  //         name: 'username',
  //         type: 'text',
  //         placeholder: 'Username',
          
  //       },    
  //       {
  //         name: 'password',
  //         type: 'password',
  //         placeholder: 'Password',
  //         cssClass: 'specialClass',
          
  //         attributes: {
  //           maxlength: 12,
  //           inputmode: 'password'
  //         }
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {

  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Submit',
  //         handler: (alertData) => {
  //           console.log('Confirm Ok'); 
  //           console.log(alertData.username);
  //           console.log(alertData.password);
  //           this.user = alertData.username;
  //           this.pass= alertData.password;
            
  //           this.login();
  //           this.display();
            
  //         }
  //       }
  //     ]
  //   });
    
  //   await alert.present();
  // }


}
