// info on possible esModuleInterop error: https://www.youtube.com/watch?v=bx4AjADk6eQ
// https://stackoverflow.com/questions/62273153/this-module-is-declared-with-using-export-and-can-only-be-used-with-a-defau 
import express = require('express');
const authRoutes = require('./routes/auth').default;


const app = express();
const PORT = 8080;

export function run() {
    console.log("Starting server at port: 8080");
}

/// set up view engine
app.set('view engine', 'ejs');

/// set up routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {res.render('home')});

app.listen(PORT, () => {
    console.log(`Listening on port, ${PORT}`);
});



const getUserChannelID = () => {}

const getUserEmail = () => {}

const getUserSubscriptions = () => {}

const getAllUserInfo = () => {}

const isUserSubscribed = () => {}

const getChannelSubscribers = () => {}

const loginAsAdmin = () => {}

const loginAsUser = () => {}