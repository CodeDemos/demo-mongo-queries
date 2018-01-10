'use strict';

// execute `$ mongo listful < ./basic/update-replace.js`

// Find the document
const doc = db.items.findOne({ name: 'Apples' });

// .update() multiple 
// Update allows full replace, but avoid since it can replace everything
db.items.update(
  { _id: doc._id },
  {
    'name': 'foobar'
  },
  // { 
  // multi: false, // default is false
  // upsert: true  // default is false
  // } 
);

// .updateOne() 
// Basically the same as .update() except
// - `multi` permanently set to **false**
// - requires atomic operators like `$set`, `$unset`, `$rename`
db.items.updateOne(
  { name: 'Apples' },
  { $set: { name: 'Honey Crisp' } }
);


// .updateMany() 
// Basically the same as .update() except
// - `multi` permanently set to **true**
// - requires atomic operators like `$set`, `$unset`, `$rename`
db.items.updateMany(
  { name: 'Apples' },
  { $set: { name: 'White Bastille' } }
);

// .replaceOne() 
// Completely replaces document
db.items.replaceOne(
  { name: 'Apples' },
  {
    'name': 'foobar'
  }
);




