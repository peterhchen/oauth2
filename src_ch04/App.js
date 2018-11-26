const express = require ('express');
const authRoutes = require ('./routes/auth-routes')
const app = express();


// setup view engine
app.set ('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get ('/', (req, res) => {
    res.render ('home');
});

// listen at port number 3000 with callback function
app.listen (3000, () => {
    console.log ('app now listening for requests on port 3000');
});