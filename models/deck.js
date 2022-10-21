import mongoose from 'mongoose'

const Schema = mongoose.Schema

const deckCommentSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'}
})

const deckSchema = new Schema({
  title: String,
  cards: [{type: Schema.Types.ObjectId, ref: 'Card'}],
  comments: [deckCommentSchema]
},{
  timestamps: true,
})

const Deck = mongoose.model('Deck', deckSchema)

export { Deck }