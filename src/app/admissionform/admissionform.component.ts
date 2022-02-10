import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent implements OnInit {
  help(data: any){
    console.warn(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
