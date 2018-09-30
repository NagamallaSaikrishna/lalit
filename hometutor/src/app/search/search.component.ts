import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Http,Response, URLSearchParams,RequestOptions} from '@angular/http';
import  'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
private mentorList:any[]=[];
private queryResults:any[]=[];
private selectedRecord:any = {
  email:'',
  course:'',
  mentor:'',
  query:''
}
  constructor(private http:Http,private activatedRoute:ActivatedRoute,private router: Router) { 
this.mentorList=[];
this.queryResults=[];

  }

  ngOnInit() {

this.selectedRecord.email= this.activatedRoute.snapshot.paramMap.get('email');

  }
courseSubmit(myForm:NgForm){
let data =  this.getTutorService();
data.subscribe((res:Response)=>{
let responseJson= res.json();
this.mentorList = responseJson.data.mentor;
});
}

getTutorService():Observable<Response>{
let params =  new URLSearchParams();
params.set('course',this.selectedRecord.course);
let option = new RequestOptions({
params:params
})
return this.http.get("http://localhost:4200/src/assets/mentor.json",option);
}

submitMentor(myForm:NgForm){
    debugger;
let data =  this.doQuery();
data.subscribe((res:Response)=>{
  debugger;
let responseJson= res.json();
let qry:any[]=[];

let temp :any = {
"email":responseJson.data.email,
"mentor":responseJson.data.mentor,
"query":responseJson.data.query
}

qry.push(temp);

this.queryResults=qry;

});

}

doQuery():Observable<Response>{
let params =  new URLSearchParams();
params.set('email',this.selectedRecord.email);
params.set('mentor',this.selectedRecord.mentor);
params.set('query',this.selectedRecord.query);
let option = new RequestOptions({
params:params
})
return this.http.get("http://localhost:4200/src/assets/query.json",option);
}
}
