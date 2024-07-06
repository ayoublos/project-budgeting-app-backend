const express = require(`express`);
const listOfTransactions = require(`../models/transaction`);
const transactions = express.Router();

transactions.use(express.json())

transactions.get(`/`, (req, res) => {
  res.send(`Hello World as well`);
});
transactions.get(`/:id`, (req, res) => {
  let id = req.params.id;

  const transaction = listOfTransactions.find((trans) => trans.id == id);
  if (transaction) {
    res.send(transaction);
  } else
    res
      .status(404)
      .send(`There is no transaction with the following id :${id}`);
});
transactions.post(`/`, (req, res) => {
  listOfTransactions.push(req.body)
  res.send(listOfTransactions)
});
transactions.put(`/:id`, (req, res) => {
    let id=req.params.id;
    let index=listOfTransactions.findIndex(trans=>trans.id==id);
    if(index!==-1){
        listOfTransactions[index]={...listOfTransactions[index],...req.body}
       res.send(listOfTransactions)
    }
    else res.status(404).send(`There is no transaction with the following id:${id} in order to update`)
    

});
transactions.delete(`/:id`, (req, res) => {
    let id=req.params.id;
    let index=listOfTransactions.findIndex(trans=>trans.id==id);
    if(index!==-1){
        listOfTransactions.splice(index,1)
       res.send(listOfTransactions)
    }
    else res.status(404).send(`There is no transaction with the following id:${id} in order to be deleted`)
    

});


module.exports = transactions;
