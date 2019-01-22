  util.inherits(BaseSchema, mongoose.Schema);

  var sc = new BaseSchema()
  sc.add({
    _karan:       { type: String, index: true, ref: 'users' }})
  
  var data =   mongoose.model('d', sc, 'd')
  
  let personalData = new data({
      _karan:'testing',
      _creator:'also me'
  })

    console.log(personalData);