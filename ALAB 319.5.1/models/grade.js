import mongoose from 'mongoose'

const g = new mongoose.Schema({
  learner_id: {type: Number, required: true},
 class_id: { type: Number, required:true },
scores: [Number], avg: Number
}, { collection: 'grades' })

export default mongoose.model('g', g)