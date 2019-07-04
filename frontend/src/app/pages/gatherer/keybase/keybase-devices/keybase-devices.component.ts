import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'ngx-keybase-devices',
    templateUrl: './keybase-devices.component.html',
    styleUrls: ['./keybase-devices.component.scss']
})
export class KeybaseDevicesComponent implements OnInit {
    @ViewChild('nbCardGraphs') private nbCardContainer: ElementRef;
    @Input() private data: any;
    private keybaseDevices : any;
    private validation : any;

    constructor() {}

    ngOnInit() {
        console.log("Keybase Devices Component");
        this.keybaseDevices = this.data.result[4].graphic[1].devices;
        this.validation = this.data.result[2].validation;
    }
}
