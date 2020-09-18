import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepComponent } from './step/step.component';
import { Step2Component } from './step2/step2.component';

const routes: Routes = [
    {
        path: 'step',
        component: StepComponent
    },
    {
        path: 'step2',
        component: Step2Component
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
