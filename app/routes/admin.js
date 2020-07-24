module.exports = (app) => {
  app.get('/formulario_inclusao_noticia', (req, res) => {
    res.render("admin/form_add_noticia")
  })

  app.post('/noticias/salvar', (req, res) => {
    const noticias = req.body
    
    const connection = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.salvarNoticia(noticias, (error, result) => {
      if(error){
        console.log('error: ', error)
      }
      res.redirect('/noticias')
    })
  })
}
