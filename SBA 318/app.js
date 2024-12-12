const express=require('express')
const router=express.Router()
let games=[] 

router.get('/',(req,res)=>{
res.render('main',{games}) 
})

router.post('/add',(req,res)=>{
const{title,date,genre}=req.body
if(!title||!date){
return res.status(400).send('title and date required')
}
games.push({title,date,genre})
console.log('game added:',{title,date,genre})
games.sort((a,b)=>new Date(a.date)-new Date(b.date))
res.status(201).json({msg:'game added'}) 
})

router.patch('/update/:title',(req,res)=>{
const{title}=req.params;
const{newTitle}=req.body
const idx=games.findIndex(g=>g.title===title)
if(idx!==-1&&newTitle){
games[idx].title=newTitle;
res.status(200).json({msg:'game updated',updated:games[idx]})
}else{
res.status(404).json({msg:'game not found or title missing'})
}
})

router.delete('/delete/:title',(req,res)=>{
games=games.filter(g=>g.title!==req.params.title)
res.json({msg:'game deleted'})
})

router.use((err,req,res,next)=>{
console.error(err.stack)
res.status(500).send('unable to load data.')
})

module.exports=router;