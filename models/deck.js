import mongoose from 'mongoose'

const Schema = mongoose.Schema

const deckSchema = new Schema({
  title: String,
  cards: {type: Schema.Types.ObjectId, ref: 'Cards'},
  comments: {type: Schema.Types.ObjectId, ref: 'Comment'}
},{
  timestamps: true,
})

const Deck = mongoose.model('Deck', deckSchema)

export { Deck }