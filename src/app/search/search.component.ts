import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  details = [
    {
      name: "Arzaw",
      address: "hfafri"
    },
    {
      name: "Ekant",
      address: "hfafri"
    },
    {
      name: "whatever",
      address: "afefai"
    }
  ]
}
