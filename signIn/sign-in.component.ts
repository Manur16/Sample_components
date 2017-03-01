import { Component,OnInit, Output } from '@angular/core';

@Component ({
    selector:'signIn-app',
    templateUrl: 'app/fireComponents/signIn/sign-in.component.html',
    styleUrls: ['app/fireComponents/signIn/sign-in.component.css']
})
export class SignInComponent
{
    //Events emitted to the parent consumer.
    @Output() changePasswordEvent:any;
    @Output() forgotPasswordEvent:any;
    @Output() signInEvent:any;
    @Output() signUpEvent:any;

    //Html elements with its properties
    emailId: Object= { text:"SIGNIN", visible:true };
    forgotPassword: Object= { text:"", visible:true };
    password: Object= { text:"", visible:true };
    signInButton: Object= { text:"", visible:true };
    signInHeader: Object= { text:"", visible:true };
    signInHelp: Object= { text:"", visible:true };
    signUp: Object= { text:"", visible:true };

    constructor() {}

    //TODO Methods
    changePasswordForm():void{
        //TODO
    }

    forgotPasswordForm():void{
         //TODO
    }

    signIn():void{
         //TODO
    }

    signUpForm():void{
         //TODO
    }
}