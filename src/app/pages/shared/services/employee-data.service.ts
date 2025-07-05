import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeModel } from '../../employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private employeeList = new BehaviorSubject<EmployeeModel[]>([]);

  employeeList$ = this.employeeList.asObservable();

  constructor() { //load the employee list
    const data = localStorage.getItem('EmpData');
    if (data) {
      this.employeeList.next(JSON.parse(data));
    }
  }

  private saveToStorage(data: EmployeeModel[]) {  //Save to Local Storage
    localStorage.setItem('EmpData', JSON.stringify(data));
    this.employeeList.next(data);
  }

  getList() {
    return this.employeeList$;
  }

  addEmployee(newEmp: EmployeeModel) {
    const current = [...this.employeeList.value];
    newEmp.empId = current.length > 0 ? Math.max(...current.map(emp => emp.empId || 0)) + 1 : 1;
    current.unshift(newEmp);
    this.saveToStorage(current);
  }

  editEmployee(updatedEmp: EmployeeModel) {
    const updated = this.employeeList.value.map(emp =>
      emp.empId === updatedEmp.empId ? updatedEmp : emp
    );
    this.saveToStorage(updated);
  }

  deleteEmployee(id: number) {
    const filtered = this.employeeList.value.filter(emp => emp.empId !== id);
    this.saveToStorage(filtered);
  }

  getEmployeeById(id: number): EmployeeModel | undefined {
    return this.employeeList.value.find(emp => emp.empId === id);
  }
}
