import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  classeProp = "verde"

  arrClassi = ["rosso", "bold"]

  isBold = false

  isRosso = false

  fontSize = 16

  isVisible = true

  styleObj = {'font-size': this.fontSize+'px', 'color': 'purple'}
  //Attenzione che il valore lo ottiene all'inzio della vita del component. Se fontSize cambia non cambia automaticamente anche styleObj

  arr = ["a", "b", "c", "d", "e", "f"]

  constructor() { }

  ngOnInit(): void {
  }

  editStyleObj() {
    this.styleObj = this.styleObj["color"] == "purple" ? {'font-size': (this.fontSize*2)+'px', 'color': 'yellow'} : {'font-size': this.fontSize+'px', 'color': 'purple'}
  }

}
