import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name :string ="Niyati Patel";
   contactNumber: number = 8767456345;
   birthdate : Date =new Date ('09/11/2000');
  constructor() { }

  ngOnInit(): void {
  }

}
