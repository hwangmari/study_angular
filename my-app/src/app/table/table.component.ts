import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  stepdsc : any=[];

    constructor() { }

    ngOnInit() {
        this.setStep();
    }

    setStep() {
        this.stepdsc = [
            {
                "step_title":"111",
                "step_dsc": "일입니다요",
            },
            {
                "step_title":"222",
                "step_dsc": "이입니다요",
            },
            {
                "step_title":"333",
                "step_dsc": "삼입니다요",
            },
            {
                "step_title":"444",
                "step_dsc": "사입니다요",
            },
            {
                "step_title":"555",
                "step_dsc": "오입니다요",
            },
        ];
    }

}