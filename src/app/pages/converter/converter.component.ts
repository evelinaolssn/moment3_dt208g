import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css'
})
export class ConverterComponent {
  meters: number = 0;
  celsius: number = 0;
}
