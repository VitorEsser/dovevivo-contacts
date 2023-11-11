import { Component } from '@angular/core';
import { Contact } from "../../models/contact.model";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  contacts: Contact[] = [
    {
      name: "Vitor",
      surname: "Esser",
      phone: "842374382742"
    },
    {
      name: "Vitor",
      surname: "Esser",
      phone: "842374382742"
    },
    {
      name: "Vitor",
      surname: "Esser",
      phone: "842374382742"
    },
    {
      name: "Vitor",
      surname: "Esser",
      phone: "842374382742"
    },
    {
      name: "Vitor",
      surname: "Esser",
      phone: "842374382742"
    },
    {
      name: "Vitor",
      surname: "Esser",
      phone: "842374382742"
    },
    {
      name: "Vitor",
      surname: "Esser",
      phone: "842374382742"
    }
  ]
}
