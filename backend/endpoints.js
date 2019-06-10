let requestify = require('requestify');

const test = (request, response) => {
    const { id_token } = request.body
    const validate_url = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + id_token
    const client_id = '1024721882562-fipoaqkrmo65b1ombddeegq49lhcies9.apps.googleusercontent.com'

    requestify.get(validate_url)
        .then((res) => {
            let body = res.getBody()
            if(body.azp === client_id && body.aud === client_id)
                response.status(200).send("valid token")
            else
                response.status(400).send("invalid token")                
        })
        .catch(()=>response.status(400).send("error when validating"))
  }
  
  module.exports = {
    test
  }
