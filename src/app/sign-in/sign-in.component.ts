import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  togglePassword(passwordInput : string,spanId: string) {
    let input = document.getElementById(passwordInput) as HTMLInputElement;
    let span = document.getElementById(spanId) as HTMLElement;
      input.type === "password" ? input.type = "text" : input.type = "password";
      if(span.classList.contains("fa-eye")){
        span.classList.remove("fa-eye");
        span.classList.add("fa-eye-slash");
      }else {
        span.classList.remove("fa-eye-slash");
        span.classList.add("fa-eye");
      }
     
  }
}
