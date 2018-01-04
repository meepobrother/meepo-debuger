import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventModule } from 'meepo-event';
import { CommonModule } from '@angular/common';
import { LoaderModule } from 'meepo-loader';
import { DebugerDirective } from './debuger';
@NgModule({
    imports: [
        CommonModule,
        LoaderModule.forRoot({
            root: ''
        })
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