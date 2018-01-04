import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventModule } from 'meepo-event';
import { CommonModule } from '@angular/common';
import { LoaderModule } from 'meepo-loader';
import { StoreModule } from 'meepo-store';

import { DebugerDirective } from './debuger';
@NgModule({
    imports: [
        CommonModule,
        LoaderModule.forRoot({
            root: ''
        }),
        StoreModule
    ],
    exports: [
        DebugerDirective
    ],
    declarations: [
        DebugerDirective
    ],
    providers: [
    ],
})
export class DebugerModule { }