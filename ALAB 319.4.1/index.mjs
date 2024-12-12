import express from 'express'
import { MongoClient,ObjectId } from "mongodb"
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(express.json())

let db, coll
const initDb = async () => {
 console.log('⏳ connecting..')
 const client = new MongoClient(process.env.MONGO_URI)
    try {
await client.connect(); db = client.db(process.env.DB_NAME)
    coll = db.collection('grades')
    console.log('✅ db ok')
    } catch (err) { console.error('❌ db err:', err); process.exit(1) }
}

initDb()

app.get('/grades', async (req, res)=>{
 const all = await coll.find({  }).toArray(); res.json(all) })

app.post('/grades', async (req, res) => { 
    const data = req.body
    if (!data.learner_id||!data.class_id||!data.scores) {
 res.status(400).send('missing fields'); return }
 let sum = 0; for(let i = 0;i<data.scores.length;i++){ sum+=data.scores[i] }
 data.avg = +(sum/data.scores.length).toFixed(2)
 const r = await coll.insertOne(data)
 res.status(201).json({id:r.insertedId})
})

app.get('/grades/stats', async (req, res) => { 
    const grades = await coll.find({}).toArray(); const total = grades.length
    const success = grades.filter((g) => g.avg > 70).length
    const rate = total ? +(success / total * 100).toFixed(2) : 0
    res.json({ total, success, rate })
})

app.get('/grades/:id', async(req,res)=>{const id = req.params.id
    if (!ObjectId.isValid(id)) {res.status(400).send('bad id'); return}
    const r = await coll.findOne({_id:new ObjectId(id)})
    r ? res.json(r) : res.status(404).send('not found')})


const port = process.env.PORT || 3008
app.listen(port, () => {console.log(`🚀 port ${port}`)})