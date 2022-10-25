import axios from "axios"

function search(req, res) {
  
  axios.get(`https://api.magicthegathering.io/v1/cards?name=${req.body.spellQuery}`)
  .then(response => {
    res.json(response.data.cards)
  })
}

export {
  search
}
//cards?/${}=${req.body.spellQuerry}