var express = require('express');
var router  = express.Router();
var Campground = require('../models/campground');

//===================
// Campground Routes
//===================

//INDEX
router.get('/',function(req,res){
    
    //Get all campgrounds from DB
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render('campgrounds/index',{campgroundsEJS:allCampgrounds}); 
        } 
    });
});

//CREATE
router.post('/',function(req,res){
    //get data from form and add to campgrounds array
    var name=req.body.name;
    var image=req.body.image;
    var description=req.body.description;
    var newCampground={name:name,image:image,description:description};
    //create a new campground and save to DB
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err);
        } else{
            res.redirect('/campgrounds')
        }
    })
});

//NEW
router.get('/new',function(req,res){
   res.render('campgrounds/new');
});

//SHOW
router.get('/:id',function(req,res){
    //find the campground with provided ID 
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        } else{
            //render show template with that campground
            res.render('campgrounds/show',{campground:foundCampground});
        }
    });
    
});

module.exports = router;