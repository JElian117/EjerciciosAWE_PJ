import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { NameListComponent } from '../name-list/name-list.component';

@Component({
  selector: 'app-content',
  imports: [CounterComponent, NameListComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
}
