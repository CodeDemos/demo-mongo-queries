# Mongo Core Components (run from command line):
- mongod* - core database process (aka the server)
- mongo* - interactive MongoDB shell
- mongos (we don't use this)

Other Command Line tools
- mongoimport*
- mongoexport
- mongodump
- mongorestore
- bsondump

# Shell Helpers
--- helpers ---                 --- javascript ---
show dbs, show databases	      db.adminCommand('listDatabases')
use <db>	                      db = db.getSiblingDB('<db>')
show collections	              db.getCollectionNames()
show users	                    db.getUsers()
show roles	                    db.getRoles({showBuiltinRoles: true})
show log <logname>	            db.adminCommand({ 'getLog' : '<logname>' })
show logs	                      db.adminCommand({ 'getLog' : '*' })
it	                            cursor = db.collection.find()
                                if ( cursor.hasNext() ){
                                  cursor.next();
                                }

# mongo import
import locally

```sh
mongoimport -d listful -c items --drop -v --file ./items.json --jsonArray
```

import into mlab

```sh
mongoimport -h ds245287.mlab.com:45287 -d list-demo -c <collection> -u <user> -p <password> --file ./items.json --jsonArray
```

# Writing Scripts for the mongo Shell
- You can write and execute scripts directly in the shell but it is not the best editing environment.
- Alternatively, you can write your queries in a script file have `mongo` execute them. The Mongo documentation provides a few examples here [Write Scripts for the mongo Shell](https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/)

- Our recommended approach uses Bash shell Input Redirection `<`.
Pros:
  - No special result cursor code is needed to log the results
  - Mongo queries are identical that used in the shell 
Cons: 
  - Requires Bash or support for input redirection
  - No `console.log()`, use `print()` instead

Create a file named `queries.js` or whatever is appropriate for your task.

```js
db.items.find().limit(1).pretty()
```

```sh
mongo listful < ./queries.js
```

```sh
mongo ds121896.mlab.com:21896/<MY-DATABASE> -u <USERNAME> -p <PASSWORD> < ~/Desktop/myScript.js

```

# Demo queries
> Hint: use `.pretty();`
> Pro Tip: Run the following to enable pretty print for all queries
```sh
echo DBQuery.prototype._prettyShell = true >> ~/.mongorc.js
```

## Basic queries (20 min)
execute `$ mongo listful < ./basic/find.js`
execute `$ mongo listful < ./basic/insert.js`
execute `$ mongo listful < ./basic/remove.js`


`.update()`
`.updateOne()`
`.updateMany()`
`.findOneAndUpdate()`
`.findAndModify()`
`.findOneAndReplace()`
`.replaceOne()`

`.insert()`
`.insertOne()`
`.insertMany()`

`.remove()`
`.deleteOne()`
`.deleteMany()`
`.findOneAndDelete()`
