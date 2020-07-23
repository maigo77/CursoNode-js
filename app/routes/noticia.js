module.exports = (app) => {
  app.get('/noticia', (req, res) => {

    const connection = app.config.dbConnection()

    connection.query('select * from noticias where id_noticia = 2', (error, result) => {
      if(error){
        console.log('error: ', error)
      }
      res.render("noticias/noticia", {noticia: result})
    })

  })
}