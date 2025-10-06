import { Component } from '@angular/core';
import {ListComponent} from '../../components/list/list.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {

}
