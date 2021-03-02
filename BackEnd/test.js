const express = require('express');
const joi = require('joi')
const app = express();

app.use(express.json())

app.post('/',(req,res)=>{
    const schema = joi.object({
        email: joi.string().trim().email().required(),
        pass : joi.string().required()
    })
  const {error, value} =  schema.validate(req.body)
  if(error){
      console.log(error)
  }


})

app.listen(3000, ()=>{
    console.log('Server on')
})
