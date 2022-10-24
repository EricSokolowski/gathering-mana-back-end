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
    try {
      const decks = await Deck.find({})
        .populate('owner')
        .sort({ createdAt: 'desc' })
      res.status(200).json(decks)
    } catch (err) {
      res.status(500).json(err)
    }
  }

const show = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id)
      .populate('owner')
      .populate('comments.author')
    res.status(200).json(deck)
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const deck = await Deck.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('owner')
    res.status(200).json(deck)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteDeck = async (req, res) => {
  try {
    const deck = await Deck.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.decks.remove({ _id: req.params.id })
    await profile.save()
    res.status(200).json(deck)
  } catch (err) {
    res.status(500).json(err)
  }
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