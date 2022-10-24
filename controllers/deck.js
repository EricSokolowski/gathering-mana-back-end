import { Profile } from "../models/profile.js";
import { Deck } from '../models/deck.js'

const create = async (req, res) => {
  console.log('create ctrl function')
  try {
    req.body.owner = req.user.profile
    const deck = await Deck.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { decks: deck } },
      { new: true }
    )
    deck.owner = profile
    res.status(201).json(deck)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const index = async (req, res) => {
  
}

const show = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id)
      .populate('onwer')
      .populate('comments.onwer')
    res.status(200).json(deck)
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  
}

const deleteDeck = async (req, res) => {
  
}

const createComment = async (req, res) => {
  
}



export {
  create,
  index,
  show,
  update,
  deleteDeck as delete,
  createComment,
}