import { Component } from '@angular/core';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent {
  travel: Travel = new Travel("Firmat","Rosario",1800,2000 )

}
