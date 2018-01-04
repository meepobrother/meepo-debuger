import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';
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
        this.debuger = this.debuger || 3;
        this.interval.clearAll();
        this.hideDebuger();
        this.render.setStyle(this.ele.nativeElement, 'opacity', '.7');
        this.interval.add(() => {
            this.num++;
            if (this.num % this.debuger == 0) {
                this.showDebuger();
            } else {
                this.hideDebuger();
            }
        }, 1000);
    }

    @HostListener('touchcancel', ['$event'])
    onTouchCancel() {
        this.interval.clearAll();
        this.render.setStyle(this.ele.nativeElement, 'opacity', '1');
    }

    @HostListener('touchend', ['$event'])
    onTouchEnd() {
        this.interval.clearAll();
        this.render.setStyle(this.ele.nativeElement, 'opacity', '1');
    }

    constructor(
        public loader: LoaderService,
        public interval: IntervalService,
        public ele: ElementRef,
        public render: Renderer2
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