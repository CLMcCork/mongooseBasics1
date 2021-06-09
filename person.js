//require mongoose 
const mongoose = require('mongoose'); 
//connect to mongoose, use .then and .catch for error handliong 
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection open!!")
})
.catch(err => {
    console.log("Oh no! An error has occurred!")
    console.log(err)
})