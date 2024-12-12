import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())

const startDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    })
    console.log('✅ db ok')
  } catch (err) {
    console.error('❌ db err:', err)
    process.exit(1)
  }
}

startDb()

const gradeSchema = new mongoose.Schema({
  learner_id: Number,
  class_id: Number,
  scores: [Number],
  avg: Number
}, { collection: 'grades' })

const Grade = mongoose.model('Grade', gradeSchema)

app.get('/grades', async (req, res) => {
  try {
    const data = await Grade.find({})
    res.json(data)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.post('/grades', async (req, res) => {
  try {
    const grade = new Grade(req.body)
    await grade.save()
    res.status(201).json(grade)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

app.get('/grades/stats', async (req, res) => {
  try {
    const data = await Grade.find({})
    const total = data.length
    const success = data.filter(g => g.avg > 70).length
    const rate = total ? ((success / total) * 100).toFixed(2) : 0
    res.json({ total, success, rate })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.get('/grades/:id', async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id)
    if (!grade) return res.status(404).send('not found')
    res.json(grade)
  } catch (err) {
    res.status(400).send('bad id')
  }
})

const port = process.env.PORT || 3008
app.listen(port, () => console.log(`🚀 port ${port}`))