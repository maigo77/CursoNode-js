module.exports = (app) => {
  app.get('/noticia', (req, res) => {

    const connection = app.config.dbConnection()
    const noticiaModel = new app.app.models.NoticiasDAO(connection)
    
    noticiaModel.getNoticia((error, result) => {
      if(error){
        console.log('error: ', error)
      }
      res.render("noticias/noticia", {noticia: result})
    })

  })
}