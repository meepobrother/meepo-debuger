import { Directive, HostListener, Input } from '@angular/core';
import { LoaderService } from 'meepo-loader';
declare const VConsole: any;
@Directive({ selector: '[debuger]' })
export class DebugerDirective {
    @Input() debuger: number = 6;
    num: number = 0;
    loaded: boolean = false;
    _debuger: any;
    @HostListener('click', ['$event'])
    onTouch() {
        this.num++;
        if (this.num % 6 == 0) {
            this.showDebuger();
        } else {
            this.hideDebuger();
        }
    }
    constructor(
        public loader: LoaderService
    ) { }

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
    }

    hideDebuger() {
        this._debuger && this.loaded && this._debuger.destroy();
        this.loaded = false;
    }
}