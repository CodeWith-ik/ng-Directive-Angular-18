----||| TS-Code  |||---

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';






// isDiv1:boolean = true;

// show(){
//   this.isDiv1 = true;
// }

// hide(){
//   this.isDiv1 = false;
// }


// isDiv2:boolean = false;

// toggle(){
//   this.isDiv2 = !this.isDiv2;
// }



// input1:string = "";
// input2:string = "";



// isCheck:boolean = false;


// isSelect:string = '';





// cityArray

// cityArray: string [] = ['karachi','lahore','Multan','Quetta'];




// StudentList: any[] = [
//   {studId:1, name:'AAA', city: 'karachi', isActive: false},
//   {studId:22, name:'BB', city: 'lahore', isActive: false},
//   {studId:34, name:'CC', city: 'Multan', isActive: false},
//   {studId:55, name:'DD', city: 'Islamabad', isActive: true},
//   {studId:88, name:'EE', city: 'Quetta', isActive: false},
//   {studId:77, name:'GG', city: 'Murree', isActive: false},
// ]




----||| HTML-Code  |||---

<div class="mt-2 p-2 bg-secondary text-white rounded">
  <h1>Structural Directive</h1>
  <p>*ngIf, *ngFor...</p>
</div> 


<!-- <div *ngIf="isDiv1" class="d1">
  1
</div>


<div>
  <button (click)="show()">show</button>
  <button (click)="hide()">Hide</button>
</div> -->




<!-- <div *ngIf="isDiv2" class="d1">
  2
</div>

 
<div>
  <button (click)="toggle()">Toggle</button>
</div> -->


<!-- <div *ngIf="input1 == input2" class="d1">
  3
</div>

 
<div>
  <input type="text" [(ngModel)]="input1">
  <input type="text" [(ngModel)]="input2">
</div>
 -->




 <!-- <div *ngIf="isCheck" class="d1">
  4
</div>

 
<div>
 <input type="checkbox" [(ngModel)]="isCheck">
</div>
 -->



 <!-- <div *ngIf="isSelect == 'multan'"  class="d1">
  5
</div>

 
<div>
  <select [(ngModel)]="isSelect">
    <option value="">select</option>
    <option value="karachi">karachi</option>
    <option value="lahore">lahore</option>
    <option value="multan">multan</option>
  </select>
</div> -->



<!-- <div> -->
  <!-- <li *ngFor="let data1 of cityArray">{{data1}}</li> -->
  <!-- <div *ngFor="let data2 of cityArray">{{data2}}</div> -->
  <!-- <select>
    <option *ngFor="let data3 of cityArray">{{data3}}</option>
  </select> -->
<!-- </div> -->





<!-- <div class="row">
  <div class="col-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>City</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let student of StudentList; let srNo = index">
          <td>{{srNo+1}}</td>
          <td>{{student.name}}</td>
          <td>{{student.city}}</td>
          <td>
            <span *ngIf="student.isActive">Active</span>
            <span *ngIf="!student.isActive">De-Active</span> 
          </td> 
        </tr>
      </tbody>
    </table>
  </div>
</div> -->



----||| CSS-Code  |||---

.d1{
    border: 1px solid black;
    width: 300px;
    height: 120px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;
    font-weight: bold;
    font-size: 22px;
}



button{
    margin-top: 20px;
    padding: 5px;
    width: 100px;
    margin-inline: 10px;
    border-radius: 10px;
    background-color: yellow;
    font-weight: bold;
}

input{
    margin-top: 10px;
    width: 150px;
    margin-left: 2px;
}


 