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
        min: [0, 'Price must be POSITIVE!']
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
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});


// productSchema.methods.greet = function() {
//     console.log("Hello!");
//     console.log(`-from ${this.name}`)  //keyword this refers to this instance 
// }
 
const Product = mongoose.model('Product', productSchema);


const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    foundProduct.greet(); 
}

findProduct(); 


// const bike = new Product({ name: 'Cyling Jersey', price: 30.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
// .then(data => {
//     console.log("It worked!!!")
//     console.log(data)
// })
// .catch(err => {
//     console.log("Oh no! Error!")
//     console.log(err)
// })

//if want your updates to have the same constraints (like price must be positive)
//then need to tell mongoose by setting runValidators: true;
// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -19.99 }, {new: true, runValidators: true})
// .then(data => {
//     console.log("It worked!!!")
//     console.log(data)
// })
// .catch(err => {
//     console.log("Oh no! Error!")
//     console.log(err)
// })