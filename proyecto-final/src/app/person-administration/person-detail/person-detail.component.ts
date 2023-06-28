import { Component } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent {

 personlist: Person[] = [
  new Person (38, "Nicolas", "Wegher", 31257551),
  new Person (25, "Facundo", "Wegher", 35120724),
  new Person (14, "Florencia", "Wegher", 33860778),
];

  person: Person = new Person (38, "Nicolas", "Wegher", 31257551)
}
