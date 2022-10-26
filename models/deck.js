import mongoose from 'mongoose'

const Schema = mongoose.Schema

const deckCommentSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'}
})

const cardSchema = new Schema({
  name: String,
  cmc: Number,
  colorIdentity: String,
  text: String,
  rarity: String,
  spellType: {
    type: String,
  },
  superTypes: {
    type: String, 
  }
},{
  timestamps: true,
})

const deckSchema = new Schema({
  title: String,
  cards: [cardSchema],
  comments: [deckCommentSchema],
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
},{
  timestamps: true,
})

const Deck = mongoose.model('Deck', deckSchema)

export { Deck }