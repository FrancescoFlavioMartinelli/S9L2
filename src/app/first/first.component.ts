import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  propertyBindingText = "Questo testo arriva dalla classe"

  isDisabled = true

  inputValue = "prova"

  constructor() { } //Lo usiamo principamente per ricevere in paramtri oggetti e servizi di angular

  ngOnInit(): void {
    //Punto di partenza, metodo eseguito all'inizializzazione del component
  }

  cambiaTesto(){
    this.propertyBindingText = "L'Event binder della view ha modicifato la propreità nel model, il property binding ha aggioranta la view"
  }

  reset() {
    this.inputValue = "Prova"
  }
}
