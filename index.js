
import express from 'express'

const app = express()


// route handler '/'
app.get('/', (req, res) => {

    // req : - All things related to the request eg, extracting the body ....
    // res , : - send something back as a response 
//   res.send('Hello World')
  res.send ("<b> hi khushi </b>")
})

app.listen(3000) //which port 