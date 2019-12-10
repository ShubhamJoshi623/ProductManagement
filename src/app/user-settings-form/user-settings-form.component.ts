import { Component, OnInit } from '@angular/core';
import { userSettings } from '../data/user-setting';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
originalusersettings:userSettings={
name:null,
emailoffers:null,
interfacestyle:null,
subscriptionType:null,
notes:null


}
usersettings:userSettings={...this.originalusersettings};
  postError: boolean;
  postErrorMessage: any;
  subscriptionTypes:Observable<string[]>;
  singleModel='on';
  startdate:Date;

  constructor(private dataservice:DataService) { }

  ngOnInit() {
   this.subscriptionTypes= this.dataservice.getsubscriptiontypes();
   this.startdate= new Date();
  }

  onBlur(field:NgModel)
  {

    console.log("in onblur", field.valid);
  }

  onHttpError(errorresposne:any)
  {
    console.log('error',errorresposne);
    this.postError=true;
    this.postErrorMessage=errorresposne.error.errorMessage;

  }

  onSubmit(form:NgForm)
  {
    console.log('in onsubmit',form.value);
    // if(form.valid)
    // {
    // this.dataservice.postUserSettingsForm(this.usersettings).subscribe(
    //   result=> console.log('success',result),
    //   error=>this.onHttpError(error)
    // );
    // }
    // else{
    //   this.postError=true;
    //   this.postErrorMessage="please fix the error";
    // }
  }

}
