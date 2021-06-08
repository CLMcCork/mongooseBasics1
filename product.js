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
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Bike Helmets', price: 29.50, categories: ['Cycling', 'Safety'] })
bike.save()
.then(data => {
    console.log("It worked!!!")
    console.log(data)
})
.catch(err => {
    console.log("Oh no! Error!")
    console.log(err)
})