import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bon-plan',
  templateUrl: './bon-plan.component.html',
  styleUrls: ['./bon-plan.component.css']
})
export class BonPlanComponent implements OnInit {
  bonsPlans: string[]; // Liste de bons plans

  constructor() {
    // Initialisation des données de bons plans
    this.bonsPlans = ['Bons plans 1', 'Bons plans 2', 'Bons plans 3'];
  }

  ngOnInit() {
  }

}
