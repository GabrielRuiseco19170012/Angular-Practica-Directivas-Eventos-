import {Component, OnInit} from '@angular/core';
import {Person} from '../../classes/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataFL: Person;

  public people: Array<Person> = [
    {id: 1, nombre: 'Carlos', apellido: 'Hernandez', sexo: 'Masculino', edad: 21},
    {id: 2, nombre: 'Eduardo', apellido: 'Meraz', sexo: 'Masculino', edad: 24},
    {id: 4, nombre: 'Fernando', apellido: 'Diaz', sexo: 'Masculino', edad: 26},
    {id: 5, nombre: 'Karla', apellido: 'Chavez', sexo: 'Femenino', edad: 28},
    {id: 6, nombre: 'Cecilia', apellido: 'Nava', sexo: 'Femenino', edad: 20},
    {id: 7, nombre: 'Paola', apellido: 'Cordova', sexo: 'Femenino', edad: 60},
    {id: 8, nombre: 'Pablo', apellido: 'Escovar', sexo: 'Masculino', edad: 30}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  sendData(details: Person): void {
    this.dataFL = details;
  }
}
