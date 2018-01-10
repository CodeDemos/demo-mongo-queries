'use strict';


// .remove(query) remove multiple
// db.items.remove({ done: true });

// .remove(query)
const doc = db.items.findOne({ name: 'Computer' });
if (doc) {
  print(doc._id);
  db.items.remove({_id: doc._id}, {justOne: true});
}