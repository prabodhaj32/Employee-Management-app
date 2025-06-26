import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeModel } from '../employee';

@Component({
  selector: 'app-empcurd',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './empcurd.component.html',
  styleUrls: ['./empcurd.component.css']
})
export class EmpcurdComponent  {

  employeeForm: FormGroup = new FormGroup({});
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];
 
  constructor(){
    debugger;
    this.createForm();
    const oldData = localStorage.getItem("EmpData");
    if(oldData != null){
       const parseData = JSON.parse(oldData);
       this.employeeList = parseData;

    }
  }
  reset(){
    this.employeeObj =new EmployeeModel();
    this.createForm()

  }

  createForm() {
    this.employeeForm = new FormGroup({
      empId: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name, [Validators.required] ),
      city: new FormControl(this.employeeObj.city),
      address: new FormControl(this.employeeObj.address),
      contactNo: new FormControl(this.employeeObj.contactNo),
      pinCode: new FormControl(this.employeeObj.pinCode,[Validators.required,Validators.minLength(6)]),
    });
  }

 onSave(){
  debugger;
   const oldData = localStorage.getItem("EmpData");
   if(oldData != null){
    const parseData = JSON.parse(oldData);
    this.employeeForm.controls['empId'].setValue(parseData.length + 1);
    this.employeeList.unshift(this.employeeForm.value);
   }else{
    this.employeeList.unshift(this.employeeForm.value);
   }

   localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
   this.reset()


 }

  onEdit(item: EmployeeModel){
  this.employeeObj = item;
  this.createForm();

 }

 onUpdate(){
  const record = this.employeeList.find(m=>m.empId == this.employeeForm.controls['empId'].value);
  if(record != undefined ){
    record.address=this.employeeForm.controls['address'].value;
    record.name=this.employeeForm.controls['name'].value;
    record.contactNo=this.employeeForm.controls['contactNo'].value;

  }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
    this.reset()

 }
 onDelete(id: number){
  const isDelete=confirm ("Are you sure want to Delete");
  if(isDelete){
    const index = this.employeeList.findIndex(m=> m.empId ==id);
    this.employeeList.splice(index,1)
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));

  }


 }

}
