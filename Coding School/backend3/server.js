const express = require('express');
const ejs = require('ejs')
const expressSession = require('express-session');
const { connectMongoose, User } = require('./database'); 
const passport = require('passport');
const { initializingPassport, isAuthenticated } = require('./passportconfig');
const app = express();

connectMongoose();
initializingPassport(passport)

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
}))
app.use(passport.session())
app.use(passport.initialize())

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index")
});

app.get('/logins',  (req, res)=>{
    res.render('login')
})
app.get('/registers', (req, res)=>{
    res.render('register')
})

app.post('/register', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).send('User already exists');
        }

        const newUser = await User.create(req.body);
        res.status(201).send(newUser);
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/login', passport.authenticate('local', {failureRedirect:'/registers'}), async(req, res)=>{
    res.send('welcome boss')
})

app.get('/profile', isAuthenticated, (req, res)=>{
    res.send(req.user)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
