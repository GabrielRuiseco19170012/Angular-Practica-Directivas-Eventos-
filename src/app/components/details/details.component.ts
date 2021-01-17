import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../classes/person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() details: Person;
  status = false;
  btnText: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
