module.exports.noticias = function(application, req, res){

  const connection = application.config.dbConnection()
  const noticiasModel = new application.app.models.NoticiasDAO(connection)

  noticiasModel.getNoticias((error, result) => {
    if(error){
      console.log('error: ', error)
    }
    res.render("noticias/noticias", {noticias: result})
  })
}

module.exports.noticia = function(application, req, res){

  const connection = application.config.dbConnection()
  const noticiaModel = new application.app.models.NoticiasDAO(connection)
  
  noticiaModel.getNoticia((error, result) => {
    if(error){
      console.log('error: ', error)
    }
    res.render("noticias/noticia", {noticia: result})
  })

}