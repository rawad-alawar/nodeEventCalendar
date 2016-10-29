//This is a temporary page created for the sole purpose of injecting our array into mongodb
var express = require('express');
var dbRouter = express.Router();
var mongodb = require("mongodb").MongoClient;

var eventsData = [ {
               name: "Event 1",
               description: "Fancy",
               date: "2016.01.01",
               time: "1:00 PM",
               duration: "1 Hour",
               location: {
                   streetAddr: "2400 Nueces",
                   city: "Austin",
                   state: "Texas",
                   zip: "78705",
                   lon: 0,
                   lat: 0
                   },
               capacity: 100
                },
               {
               name: "Event 2",
               description: "Educational",
               date: "2016.02.02",
               time: "6:00 PM",
               duration: "1.5 Hour",
               location: {
                   streetAddr: "1101 Congress Street",
                   city: "Austin",
                   state: "Texas",
                   zip: "78701",
                   lon: 0,
                   lat: 0
                   },
               capacity: 30
                },
                {
               name: "Event 3",
               description: "Free",
               date: "2016.03.03",
               time: "12:00 PM",
               duration: "1 Hour",
               location: {
                   streetAddr: "201 Colorado Street",
                   city: "Austin",
                   state: "Texas",
                   zip: "78701",
                   lon: 0,
                   lat: 0
                   },
               capacity: 200
                },
                {
               name: "Event 4",
               description: "Party",
               date: "2016.01.01",
               time: "1:00 PM",
               duration: "1 Hour",
               location: {
                   streetAddr: "200 Lavaca St",
                   city: "Austin",
                   state: "Texas",
                   zip: "78701",
                   lon: 0,
                   lat: 0
                   },
               capacity: 1000
                },
]


dbRouter.route('/addEventData')
    .get(function(req,res){
        
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');   //gets the collection named 'events', if 'events' doesn't exist, it creates it
            collection.insertMany(eventsData, function(err, results){
                res.send(results);
                db.close;
            })
            
        })
        
        
    }); 


module.exports =dbRouter;