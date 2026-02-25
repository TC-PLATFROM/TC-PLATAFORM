import { Component } from '@angular/core';
import { TcNavbarComponent } from '../../public/components/navbar/navbar';
import { WelcomeComponent } from '../../public/components/welcome/welcome';
import { ServiciosComponent } from '../../public/components/servicios/servicios';
import { UbicacionComponent } from '../../public/components/ubicacion/ubicacion';
import { ContactoComponent } from '../../public/components/contacto/contacto';
import { FooterComponent } from '../../public/components/footer/footer';
import { WelcomeModalComponent } from '../../public/components/welcome-modal/welcome-modal';
import { LoginModalComponent } from '../../public/components/login-modal/login-modal';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  templateUrl: './public-layout.html',
  styleUrls: ['./public-layout.css'],
  imports: [ 
    TcNavbarComponent, 
    WelcomeComponent, 
    ServiciosComponent, 
    UbicacionComponent, 
    ContactoComponent, 
    FooterComponent, 
    WelcomeModalComponent, 
    LoginModalComponent,RouterModule ]
})
export class PublicLayoutComponent {}

