import {
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserActions } from 'src/app/shared/user.actions';
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from 'src/app/shared/utils/generic-form-validation';
import { Auth } from '../auth.actions';
import { AuthState } from '../auth.state';
import { LoginRequestModel } from './../models/login-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  errors: any[] = [];
  usuario: LoginRequestModel = {
    email: '',
    senha: ''
  };

  validationFormControls = {
    email: 'email',
    senha: 'senha'
  };

  @Select(AuthState.getUserCredentials)
  authPhoneNumber$: Observable<string>;
  passwdMaxLength = 12;
  passwdMinLength = 4;
  validationForm = this.fb.group({
    [this.validationFormControls.email]: [
      '',
      [
        Validators.required
      ],
    ],
    [this.validationFormControls.senha]: [
      '',
      [
        Validators.required,
        Validators.maxLength(this.passwdMaxLength),
        Validators.minLength(this.passwdMinLength),
      ],
    ],
  });


  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toast: ToastController,
    private store: Store,
    private actions$: Actions
  ) { }

  ngOnInit() {
    const authSuccess$ = this.actions$.pipe(
      ofActionSuccessful(Auth.AuthenticateSuccess),
      take(1),
    );

    authSuccess$.subscribe({
      next: () => {
        this.router.navigate(
            ['/home'],
            { replaceUrl: true },
        )
      },
    });
  }


  login() {

    if (this.validationForm.invalid) {
      return;
    }

    this.usuario.email = this.validationForm.get(this.validationFormControls.email).value;
    this.usuario.senha = this.validationForm.get(this.validationFormControls.senha).value;

    this.store.dispatch(new Auth.Authenticate(this.usuario))
      .subscribe({
        next: () => {
          this.router.navigate(['/home'])
          //.then(() => this.store.dispatch(new UserActions.Get()));
        },
      });

  }

  async processarFalha(fail: any) {
    //this.errors = fail.error.errors;

    const toast = await this.toast.create({
      message: 'Ocorreu um erro',
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });

    toast.present();
  }
}
