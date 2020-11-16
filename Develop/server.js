const express = require('express');
const app = express();

const apiRoutes =  require('./routes/api/notes');
const htmlRoutes = require('.routes/html/html-routes');

const PORT = process.env.PORT || 8080;

// MIddleware CSS
app.use(express.static(__dirname + '/public'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/notes', apiRoutes)
app.use('/', htmlRoutes)


app.listen(PORT, () => {
    console.log('Server is up and running on PORT ${PORT}')
})

