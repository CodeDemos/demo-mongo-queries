'use strict';

// execute `$ mongo listful < ./basic/find.js`

db.items.find().pretty();

// .find() all
// db.items.find();    // no params
// db.items.find({});  // empty object

/**
 * Match query 
 */
// .find({ <FIELD> : <VALUE> }) an item
// db.items.find({name: 'Bananas'});

// .findOne({ <FIELD> : <VALUE> }) return only one
// db.items.findOne({done: false});

/**
 * Sort and limit
 */
// .find().sort({<FIELD>:1}) - Ascending
// .find().sort({<FIELD>:-1}) - Descending
// db.items.find().sort({name: 1});

// .find(query).count();
// db.items.find({done: false}).count();

/**
 * Projections (kinda like "select")
 */
// .find(query, returning) return name, done AND _id fields (no tags)
// db.items.find({done: false}, {name: 1, done:1});

// .find(query, returning) return name and done AND hide _id fields
// db.items.find({done: false }, {name: 1, done: 1, _id: 0 });


/**
 * Combine them all
 */
// .find(query, returning).sort().limit()
// db.items.find({done: false }, {name: 1, done:1, _id:0}).sort({name: 1}).limit(2);
