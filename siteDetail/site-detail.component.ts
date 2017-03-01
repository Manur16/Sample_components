import { Component,OnInit, Output } from '@angular/core';

@Component ({
    selector:'siteDetail-app',
    templateUrl: 'app/fireComponents/siteDetail/site-detail.component.html',
    styleUrls: ['app/fireComponents/siteDetail/site-detail.component.css']
})
export class SiteDetailComponent
{
    //Events emitted to the parent consumer.
    @Output() siteDetailsEvent:any;

    //Html elements with its properties
    buildingCount: Object= { text:"", visible:true };
    faultList: Object= {text: "", visible:true };
    panelCount: Object= { text:"", visible:true };
    zoneCount: Object= { text:"", visible:true };

    constructor() {}

    //TODO Methods
    getSiteDetails():void{
        //TODO
    }

}