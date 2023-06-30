import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  personList: Person[] = [
    new Person(26, "Nicolas", "Wegher", 31257551),
    new Person(26, "Nicolas", "Wegher", 31257551),
    new Person(26, "Nicolas", "Wegher", 31257551)
  ];
  selectedPerson: Person | null = null;
  seleccionarPersona(persona:Person) {
    this.selectedPerson = persona;
  }
}
