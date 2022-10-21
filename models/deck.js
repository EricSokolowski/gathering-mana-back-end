import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cardSchema = new Schema({
  name: String,
  imgUrl: String,
  cmc: Number,
  colorIdentity: String
},{
  timestamps: true,
})

const deckSchema = new Schema({
  title: String,
  cards: [cardSchema],
  author: {type: Schema.Types.ObjectId, ref: 'Comment'}
},{
  timestamps: true,
})

const Deck = mongoose.model('Deck', deckSchema)

export { Deck }