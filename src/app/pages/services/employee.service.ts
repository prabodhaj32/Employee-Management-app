import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee-list/employee.model'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
                      
  private apiUrl = 'http://localhost:3000/employees'; //URL for your backend API 

  constructor(private http: HttpClient) {}

  
  getEmployees(): Observable<Employee[]> {  // GET all 
    return this.http.get<Employee[]>(this.apiUrl);
  }

  
  getEmployeeById(id: number | string): Observable<Employee> {// GET ID
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

 addEmployee(employee: Omit<Employee, 'id'>): Observable<Employee> { //POST new
  return this.http.post<Employee>(this.apiUrl, employee);
}


  updateEmployee(id: number | string, employee: Employee): Observable<Employee> {//put
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
  }


  deleteEmployee(id: number | string): Observable<void> {//delete
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
