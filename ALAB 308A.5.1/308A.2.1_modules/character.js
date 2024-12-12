export function character(name) {
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