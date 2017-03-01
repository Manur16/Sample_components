import { Component,OnInit, Output } from '@angular/core';
@Component ({
    selector:'header-app',
    templateUrl: 'app/fireComponents/header/header.component.html',
    styleUrls: ['app/fireComponents/header/header.component.css']
})
export class HeaderComponent
{

    //Html elements with its properties
    brandLabel: Object= { text:"Honeywell", visible:true };
    toolLabel: Object= {text: "", visible:true };
    connectionMode: Object= { text:"", visible:true };
    userIcon: Object= { text:"", visible:true };


    //TODO Methods
    connectToPanel():void{
        //TODO
    }

    getUserInfo():void{
         //TODO
    }

    goToHome():void{
         //TODO
    }

    logout():void{
         //TODO
    }
}