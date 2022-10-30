import axios from "axios"

function search(req, res) {
  
  axios.get(`https://api.magicthegathering.io/v1/cards?${req.body.option}=${req.body.spellQuery}`)
  .then(response => {
    res.json(response.data.cards)
  })
}

export {
  search
}