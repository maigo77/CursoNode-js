module.exports = (app) => {
  app.get('/noticias', (req, res) => {

    const connection = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.getNoticias((error, result) => {
      if(error){
        console.log('error: ', error)
      }
      res.render("noticias/noticias", {noticias: result})
    })

  })
}