var express = require('express');

var eventRouter = express.Router();
var mongodb = require("mongodb").MongoClient;

eventRouter.route('/')
    .get(function(req,res){
        
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');   //gets the collection named 'events', if 'events' doesn't exist, it creates it
            collection.find({}).toArray(function(err,results){
                
            res.render('events',{        //we have our res.render set to look in the views folder.That is where it finds 'events'
             list: ['first event', 'second event', 'third event'],
                 nav: [{Link: 'Services', Text: 'Services'}, 
                 {Link: 'Portfolio', Text: 'Portfolio'},
                 {Link:'About', Text: 'About'},
                 {Link: 'Team', Text: 'Team'},
                 {Link: 'Contact', Text: 'Contact'},
                 {Link: 'Events', Text: 'Events'}
            ],
            events: results
                }); 
                
            });
 
        });

});


eventRouter.route('/:id')
    .get(function(req,res){
        var id = req.params.id;
        res.render('event',{        //we have our res.render set to look in the views folder.That is where it finds 'events'
            list: ['first event', 'second event', 'third event'],
       nav: [{Link: 'Services', Text: 'Services'}, 
             {Link: 'Portfolio', Text: 'Portfolio'},
             {Link:'About', Text: 'About'},
             {Link: 'Team', Text: 'Team'},
             {Link: 'Contact', Text: 'Contact'},
             {Link: 'Events', Text: 'Events'}
        ],
        events: eventsData[id]
    }); 
})
    
    
module.exports= eventRouter;