import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
private isValidFormSubmitted:boolean=false;
private emailPattern :string =  "/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/";
 constructor(private router:Router) { }

  ngOnInit() {
  }




  submitRegisteration(myregForm:NgForm){
    this.isValidFormSubmitted = false ;
    let isValid = this.onValidate(myregForm);
    if(isValid == 'Y'){
    //redirect to dashboard
    this.isValidFormSubmitted = true ;
    this.router.navigate(['/search']);
    }

  }
 onValidate(myregForm) {
    if (myregForm.invalid) {
      return 'N';
    } else 
    {
      
      if(myregForm.value.yourpassword !== myregForm.value.confirmpassword)
        return 'N'
      else 
      return 'Y';
    }
  }
}
