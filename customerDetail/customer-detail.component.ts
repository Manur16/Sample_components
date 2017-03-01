import { Component,OnInit, Output } from '@angular/core';

@Component ({
    selector:'custDetail-app',
    templateUrl: 'app/fireComponents/customerDetail/customer-detail.component.html',
    styleUrls: ['app/fireComponents/customerDetail/customer-detail.component.css']
})
export class CustomerDetailComponent
{
   @Output() custDetailsEvent:any;

    //Html elements with its properties
    contactAddress: Object= { text:"", visible:true };
    contactName: Object= {text: "", visible:true };
    officeNo: Object= { text:"", visible:true };
    projectId: Object= { text:"", visible:true };

    constructor() {}

    //TODO Methods
    getCustDetails():void{
        //TODO
    }
}