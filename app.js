var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var passport    = require('passport');
var LocalStrategy = require('passport-local');
var Campground = require('./models/campground');
var Comment     = require('./models/comment');
var User        = require('./models/user');
var seedDB      = require("./seed");

//requiring routes
var campgroundRoutes = require('./routes/campgrounds'),
    commentRoutes    = require('./routes/comments'),
    authRoutes       = require('./routes/index');

mongoose.connect('mongodb://localhost:27017/yelp_camp_v8', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
// go to /public dir, and link to the main.css file
app.use(express.static(__dirname +"/public"));

//seedDB();  //seed the database

//=========================
//  PASSPORT configuration
//=========================
app.use(require("express-session")({
    secret: "Jac is the best coder!",
    resave:false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//----------------------------------------------------

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use('/',authRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);

app.listen(process.env.PORT,process.env.IP,function(error,response,body){
    console.log('YelpCamp has started...');
});