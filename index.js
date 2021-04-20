const express = require('express')
const morgan  = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())


let db = [

    {'1' :
    {Nome :'Cliente1', Idade :'30 anos'}},
    {'2' : 
    {Nome :'Cliente2', Idade :'20 anos'}},
    {'3' :
    {Nome :'Cliente3', Idade :'40 anos'}}

]

app.get('/',(req,res)=>{
    return res.json(db)
})

app.post('/add',(req,res)=>{
    const body = req.body

    if(!body)
        return res.status(400).end()

        db.push(body)
        return res.json(body)
})

app.listen(21262,()=>{
    console.log(`Express started at localhost://21262`)
})