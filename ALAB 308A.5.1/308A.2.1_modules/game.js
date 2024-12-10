import { adventurer } from './adventurer.js';
import { companion } from './companion.js';

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