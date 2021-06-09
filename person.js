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

//schema 
const personSchema = new mongoose.Schema({
    first: String,
    last: String
})


personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})


//mongoose middleware functions 
//this runs pre saved 
personSchema.pre('save', async function() {
    this.first = 'Yoooooooo';
    this.last = 'Mama';
    console.log("About to save!!!!")
})

//mongoose middleware 
//this runs post saved 
personSchema.post('save', async function() {
    console.log("JUST SAVED!!!!")
})

//person model 
const Person = mongoose.model('Person', personSchema);