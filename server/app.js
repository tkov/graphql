const express = require('express');
// express-graphql makes express understand graphql
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to database
const uri = "mongodb+srv://tim:test123@cluster0.v6o8m.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log('Connected to database...');
})



// middleware...
app.use('/graphql', graphqlHTTP({
    schema,   // or for ES6, simply 'schema'
    graphiql: true
}));

// listen to a specific port...

app.listen(4000, () => {
    // callback function
    console.log('Now listening for request on port 4000...');
});



