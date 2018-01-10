'use strict';

// execute `$ mongo listful < ./basic/insert.js`

// create some document objects to insert
const item = { 
  'name': 'Computer', 
  'tags': ['online', 'electronics'], 
  'done': false
};

// .insert()
db.items.insert(item);

// .insertOne()
db.items.insertOne(item);

// .insertMany()
db.items.insertMany([item, item]);