import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cardSchema = new Schema({
  name: String,
  cmc: Number,
  colorIdentity: String,
  text: String,
  rarity: { 
    type: String,
    enum: ['common', 'uncommon', 'rare', 'mythic rare']
  },
  spellType: {
    type: String,
    enum: ['creature', 'instant', 'land', 'sorcery', 'planeswalker', 'artifact', 'enchantment']
  },
  superTypes: {
    type: String,
    enum: ['basic', 'legendary', 'snow', 'host', 'ongoing', 'world']
  }
},{
  timestamps: true,
})

const Card = mongoose.model('Card', cardSchema)

export { Card }