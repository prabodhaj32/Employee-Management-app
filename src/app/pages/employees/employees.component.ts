import { Component } from '@angular/core';
import employees from './data/employees.json'
import { NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from './Employees.model';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component'; 




@Component({
  selector: 'app-employees',
  imports: [NgIf,NgForOf,CurrencyPipe,FormsModule,ProgressBarComponent],//ProgressBarComponent
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
    title = 'Employee Systerm';

    employees: Employee[] = employees; //
    filteredEmployees: Employee[] = employees;

    showIcon:boolean =false;
    message:string= ''; //C > P


  private _designationFilter:string='' //desfilter
  set designationFilter(value : string){
    
    this._designationFilter = value;
    this.filterByDesignation()
  }
  get designationFilter(): string{
    return this._designationFilter;
  }
  

    constructor(){}
    ngOnInit():void{

     

    }
     toggleIcon(){
        this.showIcon =!this.showIcon;
    }

      filterByDesignation(){
        this.filteredEmployees = this.employees.filter(employee => employee.designation.includes(this.designationFilter))
    }

    onMessageRecived(value:string){ 
      this.message=value;
    }
    
}
