import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup = this.fb.group({
    email:    ['brocar@gmail.com', [ Validators.required, Validators.email ]],
    password: ['brocartrux', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor( private fb: FormBuilder,
               private router: Router, 
               private authService: AuthService) { }
  

  login() {
  
    const { email, password } = this.formularioLogin.value;

    this.authService.login( email, password )
      .subscribe( user => {
        this.router.navigate(['/paginas/perfil']);
      });
  }

  ngOnInit(): void {
    
  }

}
