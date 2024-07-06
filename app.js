const express=require(`express`)
const app=express()
const transactionController=require(`./controllers/transactionController`)


app.use(`/transactions`,transactionController)
app.get(`/`,(req,res)=>{
    res.send(`Hello World`)
})
app.get(`/*`,(req,res)=>{
    res.status(404).send(`Inexistent Route`)
})
module.exports=app