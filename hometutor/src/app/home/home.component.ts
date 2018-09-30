import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private isValidFormSubmitted:boolean=false;
private emailPattern :string =  "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  submitLogin(myForm: NgForm) {
    this.isValidFormSubmitted = false ;
    let isValid = this.onValidate(myForm);
    if(isValid == 'Y'){
    //redirect to search
    this.isValidFormSubmitted = true ;
    this.router.navigate(['/search',{email:myForm.value.youremail}]
    
  
  );
    } else {
      return ;
    }
    myForm.resetForm();
  }

  onValidate(myForm) {
    if (myForm.invalid) {
      return 'N';
    } else 
    return 'Y';
  }
  onJoinNow(){
this.router.navigate(['/registeration']);
  }
}
