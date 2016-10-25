var express = require('express');

var eventRouter = express.Router();

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

eventRouter.route('/')
    .get(function(req,res){
        res.render('events',{        //we have our res.render set to look in the views folder.That is where it finds 'events'
            list: ['first event', 'second event', 'third event'],
       nav: [{Link: 'Services', Text: 'Services'}, 
             {Link: 'Portfolio', Text: 'Portfolio'},
             {Link:'About', Text: 'About'},
             {Link: 'Team', Text: 'Team'},
             {Link: 'Contact', Text: 'Contact'},
             {Link: 'Events', Text: 'Events'}
        ],
        events: eventsData
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