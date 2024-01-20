import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
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
