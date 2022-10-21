import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cardSchema = new Schema({
  name: String,
  cmc: Number,
  colorIdentity: String,
  text: String,
  rarity: String
},{
  timestamps: true,
})

const Card = mongoose.model('Card', cardSchema)

export { Card }