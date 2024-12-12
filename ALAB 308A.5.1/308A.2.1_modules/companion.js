import { character } from './character.js';

export function companion(name,type){
    character.call(this,name)
    this.type=type||"unknown"
    
    this.help=function(){
        console.log(this.name+" ("+this.type+") tries to help..")
        let helpRoll=this.rollDice()
        if(helpRoll>10){
            console.log(this.name+" was helpful!")
        }else{
            console.log(this.name+" couldn't help..")}
    }
}