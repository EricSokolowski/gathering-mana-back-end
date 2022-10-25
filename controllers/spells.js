import axios from "axios"

function search(req, res) {
  
  axios.get(`https://api.magicthegathering.io/v1/cards?name=${req.body.spellQuery}`)
  .then(response => {
    console.log('*response*',response.data, '*response*')
  })
}

export {
  search
}
//cards?/${}=${req.body.spellQuerry}