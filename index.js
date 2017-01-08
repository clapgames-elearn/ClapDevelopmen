const   path = require('path'),
        express = require('express'),
        app = express(),
        appPaths = {
            'backEnd' : 'nodeApp/',
            'ui' : 'UI-App/',
            'build' : 'build/'
        },
        port = process.env.PORT || 3000;

app.use(express.static(__dirname +'/'+ appPaths.ui)); 

//app.use('/app',express.static(__dirname +'/app/')); 

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});