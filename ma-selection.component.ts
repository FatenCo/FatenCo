import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-selection',
  templateUrl: './ma-selection.component.html',
  styleUrls: ['./ma-selection.component.css']
})
export class MaSelectionComponent implements OnInit {
  maSelection: string[]; // Remplacez le type string[] par le type approprié pour vos éléments de sélection

  constructor() {
    // Initialisez vos données de sélection ici
    this.maSelection = ['Élément 1', 'Élément 2', 'Élément 3']; // Exemple de données statiques, remplacez-les par vos propres données
  }

  ngOnInit() {
  }

}

