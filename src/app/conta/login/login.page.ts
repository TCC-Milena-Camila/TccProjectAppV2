import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { fromEvent, merge, Observable } from 'rxjs';
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from 'src/app/shared/utils/generic-form-validation';
import { LoginUserModel } from '../models/login-user.model';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  errors: any[] = [];
  loginForm: FormGroup;
  usuario: LoginUserModel;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toast: ToastController
  ) {
    this.validationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido',
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(
        this.loginForm
      );
    });
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.loginForm.value);

      this.contaService.login(this.usuario).subscribe(
        (sucesso) => {
          this.processarSucesso(sucesso);
        },
        (falha) => {
          this.processarFalha(falha);
        }
      );
    }
  }

  async processarSucesso(response: any) {
    this.loginForm.reset();
    this.errors = [];

    console.log(response);

    this.contaService.salvarDadosLocaisUsuario(response);

    this.router.navigate(['/home']);

    const toast = await this.toast.create({
      message: 'Logado com sucesso',
      duration: 1000,
      position: 'bottom',
      color: 'success',
    });

    toast.present();
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
