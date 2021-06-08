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

//can make the schema objects like this (good for validation) 
//or can make schema like the one in index.js example 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Moutain Bike', price: 999, color: 'red' })
bike.save()
.then(data => {
    console.log("It worked!!!")
    console.log(data)
})
.catch(err => {
    console.log("Oh no! Error!")
    console.log(err)
})