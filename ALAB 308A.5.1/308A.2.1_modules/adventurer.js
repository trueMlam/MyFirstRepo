import { character } from './character.js';

export function adventurer(name,role){
    character.call(this,name);
    this.role=role || 'no role'
    
    this.inventory.push("bedroll",'50 gold coins')
    
    this.attack=function(opponent){
        if (opponent.isalive){
            console.log(this.name + " attacks " + opponent.name)
            let atkRoll=this.rollDice()
            let defRoll=opponent.rollDice()
            console.log(this.name+" rolled "+atkRoll+", "+opponent.name+' rolled '+defRoll)
            if(atkRoll>defRoll){
                let dmg = Math.floor(Math.random() * 10) + 1
                console.log(this.name+" hits "+opponent.name+" for "+dmg+" damage!")
                opponent.health-=dmg
                opponent.checkHealth()
            } else{
                console.log(opponent.name+" dodged "+this.name+"'s attack!")}
        }else{
            console.log("attack failed: "+opponent.name+" is already dead")}}

    this.scout=function(){console.log(this.name+" goes scouting..")
        let scoutRoll=this.rollDice(3)
        if (scoutRoll>15){
            console.log(this.name+" scouted successfully!")
            this.addItem('valuable artifact')
        }else if(scoutRoll>10){
            console.log(this.name+" found nothing useful.")
        }else{
            console.log(this.name+" fell into a trap!")
            this.health-=10
            this.checkHealth()
        }
    }
}