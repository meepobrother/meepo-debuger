import { Directive, HostListener, Input } from '@angular/core';
import { LoaderService } from 'meepo-loader';
import { IntervalService } from 'meepo-event';

declare const VConsole: any;
@Directive({
    selector: '[debuger]',
    providers: [
        IntervalService
    ]
})
export class DebugerDirective {
    @Input() debuger: number = 3;
    num: number = 0;
    loaded: boolean = false;
    _debuger: any;
    @HostListener('touchstart', ['$event'])
    onTouchStart() {
        // this.showDebuger();
        this.interval.clearAll();
        this.hideDebuger();
        this.interval.add(() => {
            this.num++;
            if (this.num % 6 == 0) {
                this.showDebuger();
            } else {
                this.hideDebuger();
            }
            console.log(this.num);
        }, 1000);
    }

    @HostListener('touchcancel', ['$event'])
    onTouchCancel() {
        this.interval.clearAll();
    }

    @HostListener('touchend', ['$event'])
    onTouchEnd() {
        this.interval.clearAll();
    }

    constructor(
        public loader: LoaderService,
        public interval: IntervalService
    ) {

    }

    showDebuger() {
        if (this._debuger) {
            this._debuger = new VConsole();
            this._debuger.show();
        } else {
            this.loader.import(['https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js']).subscribe(res => {
                this._debuger = new VConsole();
                this._debuger.show();
            });
        }
        this.loaded = true;
        this.interval.clearAll();
    }

    hideDebuger() {
        this._debuger && this.loaded && this._debuger.destroy();
        this.loaded = false;
    }
}