var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Spring Tahoe",
        image:"https://cdn-img.pressreader.com/pressdisplay/docserver/getimage.aspx?regionKey=h9kE7K6qoyVX5nl5SykuQA%3D%3D&scale=100",
        description:"Bacon ipsum dolor amet ipsum nulla voluptate shoulder ground round adipisicing, anim eiusmod pancetta. Culpa excepteur in dolore sint adipisicing, ham hock t-bone alcatra sausage ea quis velit. Short loin pork loin sint ut biltong magna. Fatback elit buffalo nisi pariatur turkey fugiat biltong ham hock meatloaf lorem velit meatball duis. T-bone drumstick enim boudin brisket burgdoggen excepteur veniam swine pariatur capicola tail ea chicken et. Tri-tip velit nostrud dolore est elit."
    },
    {
        name:"Summer Tahoe",
        image:"https://cbssacramento.files.wordpress.com/2012/02/emerald-bay-lake-tahoe.jpg?w=420&h=284&crop=1",
        description:"Bacon ipsum dolor amet ipsum nulla voluptate shoulder ground round adipisicing, anim eiusmod pancetta. Culpa excepteur in dolore sint adipisicing, ham hock t-bone alcatra sausage ea quis velit. Short loin pork loin sint ut biltong magna. Fatback elit buffalo nisi pariatur turkey fugiat biltong ham hock meatloaf lorem velit meatball duis. T-bone drumstick enim boudin brisket burgdoggen excepteur veniam swine pariatur capicola tail ea chicken et. Tri-tip velit nostrud dolore est elit."
    },
    {
        name:"Fall Tahoe",
        image:"http://www.tahoeresorthotel.com/wp-content/uploads/2017/10/Fall-Colors-Credit-Tahoe-South.jpg",
        description:"Lake Tahoe in Fall"
    },
    {
        name:"Winter Tahoe",
        image:"https://i.ytimg.com/vi/X3khV7vmpJ8/maxresdefault.jpg",
        description:"Lake Tahoe in Winter"
    }
    ]

function seedDB(){
    //remove all campgrounds
    Campground.remove({},function(err){
    //   if(err){
    //       console.log(err);
    //   }
    //   console.log("campgrounds removed!!");
       
    //     //add a frew campgrounds
    //     data.forEach(function(seed){
    //     //'seed' represents each item in data[]    
    //         Campground.create(seed,function(err,campground){
    //             if(err){
    //                 console.log(err);
    //             } else {
    //                 console.log("added a campgrounds");
    //                 //create a comment
    //                 Comment.create(
    //                     {
    //                         text:"This place is great, but I waish there was Internet",
    //                         author:"Homer"
    //                     },function(err,comment){
    //                         if(err){
    //                             console.log(err);
    //                         } else {
    //                             campground.comments.push(comment);
    //                             campground.save();
    //                             console.log("created new comment");
    //                         }
    //                     })
    //             }
    //         });
    //    });
    });
    
}

module.exports = seedDB; 