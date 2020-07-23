const connection = require('../../config/dbConnection')()

module.exports = (app) => {
  app.get('/noticias', (req, res) => {

    connection.query('select * from noticias', (error, result) => {
      if(error){
        console.log('error: ', error)
      }
      res.render("noticias/noticias", {noticias: result})
    })

  })
}