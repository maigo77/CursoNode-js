module.exports.formulario_inclusao_noticia = function(application, req, res){
  res.render("admin/form_add_noticia", {validacao: {}, noticia: {}})
}

module.exports.noticias_salvar = function(application, req, res){
  const noticias = req.body
    
  req.assert('titulo', 'O título é obrigatório').notEmpty()
  req.assert('resumo', 'O resumo é obrigatório').notEmpty()
  req.assert('resumo', 'O resumo deve conter entre 10 e 100 caracteres').len(10, 100)
  req.assert('autor', 'O nome é obrigatório').notEmpty()
  req.assert('data_noticia', 'A data da notícia é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'})
  req.assert('noticia', 'A notícia é obrigatória').notEmpty()

  let erros = req.validationErrors()
  if(erros){
    res.render("admin/form_add_noticia", {validacao: erros, noticia: noticias})
    return
  }

  const connection = application.config.dbConnection()
  const noticiasModel = new application.app.models.NoticiasDAO(connection)

  noticiasModel.salvarNoticia(noticias, (error, result) => {
    if(error){
      console.log('error: ', error)
    }
    res.redirect('/noticias')
  })
}

/* 
  Os controllers ficam encarregados de utilizar as views e tudo que for necessário como os models, para fornecer ao requisitante as informações necessárias
*/