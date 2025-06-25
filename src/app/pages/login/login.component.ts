import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName:'',
    password: '',
    emailId:''
  }

  userLogin: any = {
    userName:'',
    password: '',
  }

  router = inject(Router);

  onRegister() {
    debugger;
    //saved users from localStorage ,the key is  angular19Local
    const isLocalData = localStorage.getItem("angular19Local");
    
    if(isLocalData != null) { //user adding
      const localArray =  JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular19Local",JSON.stringify(localArray))

    } else {

      const localArray = [];//Create a new array
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular19Local",JSON.stringify(localArray))
    }
    alert("Registration Success");
  }

  onLogin() {
    debugger;
    const isLocalData = localStorage.getItem("angular19Local");
    if(isLocalData != null) {
      const users = JSON.parse(isLocalData);

      // user matches the login input
      const isUserFound =  users.find((m:any)=> m.userName == this.userLogin.userName && m.password == this.userLogin.password);
      if(isUserFound != undefined) {

         this.router.navigateByUrl('dashboard')//nav dashbord

      } else {
        alert("User name or password is Wrong")
      }
    } else {
      alert("No User Found")
    }
  }
}