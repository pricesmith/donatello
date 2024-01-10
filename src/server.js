// info on possible esModuleInterop error: https://www.youtube.com/watch?v=bx4AjADk6eQ
// https://stackoverflow.com/questions/62273153/this-module-is-declared-with-using-export-and-can-only-be-used-with-a-defau 
const express = require('express');
const authRoutes = require('./routes/auth').default;
require('./config/passport.config'); /// runs the passport config file

// todo: call bootstrap?
function bootstrap() {
    /// init express app
    const app = express();

    /// set up view engine
    app.set('view engine', 'ejs');

    /// set up routes
    app.get('/', (req, res) => {res.render('home')});
    app.use('/auth', authRoutes);

    const PORT = process.env.PORT || 8080; 
    
    try {
        app.listen(PORT, () => {
            console.log(`Listening on port, ${PORT}`);
        });
    }
    catch {
        console.log("Error starting server.");
    }
}

bootstrap();

const getUserChannelID = () => {}

const getUserEmail = () => {}

const getUserSubscriptions = () => {}

const getAllUserInfo = () => {}

const isUserSubscribed = () => {}

const getChannelSubscribers = () => {}

const loginAsAdmin = () => {}

const loginAsUser = () => {}