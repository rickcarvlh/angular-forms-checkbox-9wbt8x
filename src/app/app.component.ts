import { Component } from '@angular/core';
import { Log } from '@angular/core/testing/src/logger';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  form: FormGroup;

  user1 ={
    addOns:[
      {name:'IsValidDrivingLicense', selected:true, id:1},
      {name:'IsMoreThanOneVehicle', selected:false, id:2},
      {name:'IsNoPrevInsurance', selected:false, id:3},
      {name:'IsTransferOfNCB', selected:false, id:4}
    ]
  }
  constructor(private fb: FormBuilder) {

     this.form = this.fb.group({
       addOns: this.buildAddOns()
     });
  }

  get addOns() {
    return this.form.get('addOns') as FormArray;
  }

  buildAddOns(){
    const arr = this.user1.addOns.map(s=>{
      return this.fb.control(s.selected,);
    })
    console.log('teste', arr)
    return this.fb.array(arr);
    
  }

  submit(value){
    const f = Object.assign({}, value, {
      addOns: value.addOns.map((s,i) =>{
        return{
          name: this.user1.addOns[i].name,
          selected:s,

        }
      })
    });
    console.log(f);
  }
}
