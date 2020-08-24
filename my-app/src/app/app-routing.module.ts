import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepComponent } from './step/step.component';
import { Step2Component } from './step2/step2.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    {
        path: 'step',
        component: StepComponent
    },
    {
        path: 'step2',
        component: Step2Component
    }
    ,
    {
        path: 'table',
        component: TableComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
