function character(name) {
    this.name=name;
    this.health = 100; 
    this.inventory=[];
    this.isalive=true;
    
    this.checkHealth = function(){
        if(this.health<=0){this.health=0;
        this.isalive=false;
        console.log(this.name+' can no longer fight..');}}

    this.rollDice = function(modifier) {
        if(modifier==undefined){modifier=0}
        console.log("rolling dice with mod " + modifier + ' for ' + this.name)
        let rollRes = Math.floor(Math.random()*20)+1+modifier
        console.log(this.name+' rolled ' + rollRes)
        return rollRes
    }

    this.addItem=function(item){
        console.log('trying to add '+item+' to '+this.name+"'s inventory")
        if(this.inventory.indexOf(item) !== -1){
            console.log(this.name+' already has '+item)}
        else{this.inventory.push(item);
            console.log(item+' added to '+this.name+"'s inventory")}}

    this.showStatus=function(){console.log('status for ' + this.name)
        console.log('hp: ' + this.health)
        console.log('inventory: '+ (this.inventory.length > 0 ? this.inventory.join(", ") : "empty"))
        if(this.isalive){
            console.log(this.name + ' is still standing')}
        else { console.log(this.name+' has fallen') }
    }
}

function adventurer(name,role){
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

function companion(name,type){
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

let robin=new adventurer('Robin','fighter')
robin.addItem("sword")
robin.addItem("health potion")

let leo=new companion('Leo','cat')
robin.companion=leo

let frank=new companion('Frank','flea')
leo.companion=frank

robin.showStatus()
leo.showStatus()
frank.showStatus()

robin.scout()

leo.help()
frank.help()

let john=new adventurer("John","archer")
let mike=new adventurer('Mike','knight')

john.addItem("bow")
mike.addItem('sword')

john.attack(mike)
mike.attack(john)

john.showStatus()
mike.showStatus()