import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    flexCheckDefault: null,
    interfaceStyle: null,
    subscriptionType: null
  };

  singleModel = "On";
  startDate:Date;
  userSettings : UserSettings = {...this.originalUserSettings};
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();

    this.startDate = new Date();
  }

  onBlur(field : NgModel){
    console.log('in onBlur: ', field.valid)
  }

  onHttpError(error: any){
    //console.log('error: ', errorResponse);
    this.postError = true;
    //this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.value);

    //if(form.valid){
      //this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        //result => console.log('success:', result),
        //error => this.onHttpError(error)
      //);
    //}
    //lse{
    //this.postError = true;
    //his.postErrorMessage = "please fix the above errors"
    //}
  }

}
