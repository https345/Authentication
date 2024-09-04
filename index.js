import express from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import { fileURLToPath } from "url"
const x = dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended : true}))
app.post('/submit', (req, res)=>{
    //console.log(req.body)
    if(req.body.pswrd==="Abc123")
        res.sendFile(x+"/public/success.html")
    else
        res.sendFile(x+"/public/Failure.html")    
})
app.get('/', (req, res)=> {
    res.sendFile(x+"/5.Authentication/public/index.html")
    //res.sendFile(x+"/styles.css")
})
const port = 3000
app.listen(port , ()=>{
    console.log("listening on port "+port)
})