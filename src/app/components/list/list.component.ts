import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Person} from '../../classes/person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() data: Array<Person>;
  @Output() details = new EventEmitter<Person>();

  selectedPerson: Person = new Person();
  status = true;
  btnText = 'Ocultar lista';

  constructor() {
  }

  ngOnInit(): void {
  }

  openData(persona: Person): void {
    this.selectedPerson = persona;
    this.details.emit(persona);
  }

  addOrEdit(): void {
    this.selectedPerson.id = this.data.length + 1;
    const ix = this.selectedPerson ? this.data.findIndex(h => h.id === this.selectedPerson.id) : -1;
    if (ix > -1) {
      this.data[ix] = this.selectedPerson;
    } else {
      this.data.push(this.selectedPerson);
    }
    this.selectedPerson = new Person();
  }

  delete(): void {
    this.data = this.data.filter(x => x !== this.selectedPerson);
    this.selectedPerson = new Person();
  }
}
