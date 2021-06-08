//require mongoose 
const mongoose = require('mongoose'); 
//connect to mongoose, use .then and .catch for error handliong 
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection open!!")
})
.catch(err => {
    console.log("Oh no! An error has occurred!")
    console.log(err)
})

//define a schema 
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String 
});

//take schema and tell mongoose to make a model using that schema 
const Movie = mongoose.model('Movie', movieSchema);
// const beautyBeast = new Movie({title: 'Beauty & the Beast', year: 1990, score: 10, rating: 'G'});


// Movie.insertMany([
//     { title: 'Aladdin', year: 1992, score: 8.3, rating: 'G'},
//     { title: 'The Lion King', year: 1994, score: 8.3, rating: 'G'},
//     { title: 'The Little Mermaid', year: 1883, score: 8.3, rating: 'G'},
//     { title: 'A Goofy Movie', year: 2001, score: 8.3, rating: 'PG'},
//     { title: 'Toy Story', year: 2004, score: 8.3, rating: 'PG'},
// ])
// .then(data => {
//     console.log("IT WORKED!");
//     console.log(data);
// })
