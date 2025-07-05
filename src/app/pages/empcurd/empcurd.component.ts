
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from '../employee';
import { EmployeeDataService } from '../../pages/shared/services/employee-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empcurd',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './empcurd.component.html',
  styleUrls: ['./empcurd.component.css']
})
export class EmpcurdComponent implements OnInit {

  employeeForm: FormGroup;
  employeeList: EmployeeModel[] = [];
  isUpdate = false;

  constructor(private empService: EmployeeDataService) { //link
    this.employeeForm = this.createForm();
  }
  reset(): void {
  this.employeeForm.reset();
}


  ngOnInit(): void {
    this.empService.getList().subscribe(data => {
      this.employeeList = data;
    });
  }

  createForm(): FormGroup {
    return new FormGroup({
      empId: new FormControl(null),
      name: new FormControl('', Validators.required),
      city: new FormControl(''),
      address: new FormControl(''),
      contactNo: new FormControl(''),
      pinCode: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  resetForm() {
    this.employeeForm.reset();
    this.isUpdate = false;
  }

  onSave() {
    if (this.employeeForm.valid) {
      this.empService.addEmployee(this.employeeForm.value);
      this.resetForm();
    }
  }

  onEdit(emp: EmployeeModel) {
    this.employeeForm.setValue({
      empId: emp.empId,
      name: emp.name,
      city: emp.city,
      address: emp.address,
      contactNo: emp.contactNo,
      pinCode: emp.pinCode
    });
    this.isUpdate = true;
  }

  onUpdate() {
    if (this.employeeForm.valid) {
      this.empService.editEmployee(this.employeeForm.value);
      this.resetForm();
    }
  }

  onDelete(id: number) {
    const confirmDelete = confirm("Are you sure want to delete?");
    if (confirmDelete) {
      this.empService.deleteEmployee(id);
    }
  }
}


