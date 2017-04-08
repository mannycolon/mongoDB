var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2]
var collectionName = process.argv[3]
var id = process.argv[4]

mongo.connect(url, function (err, db){
    if (err) throw err
    var collection = db.collection(collectionName)
    collection.remove({
        _id: id
    }, function(err, data) {
        if (err) throw err
        db.close()
    })
})

// Learn MongoDB
// ───────────────
//  REMOVE
//  Exercise 7 of 9

// This lesson involves removing a document with the given _id.

// The database name will be accessible via process.argv[2].

// The collection name will be passed as the second argument to your script.

// The _id will be passed as the third argument to your script.

// -------------------------------------------------------------------------------

// ## HINTS

// To remove a document, one would need to call remove() on the collection.

// Ex.
//     collection.remove({
//       name: 'foo'
//     }, callback)

// The first argument to remove() is the query.

// If your program does not finish executing, you may have forgotten to
// close the db. That can be done by calling db.close() after you
// have finished.

// ## Resource
//   * http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#remove

// » To print these instructions again, run: learnyoumongo print
// » To run your program, run: learnyoumongo run [solution.js]
// » To verify your program, run: learnyoumongo verify [solution.js]
// » For help run: learnyoumongo help
// Your solution to REMOVE passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var mongo = require('mongodb').MongoClient
    
//     var url = 'mongodb://localhost:27017/' + process.argv[2]
    
//     mongo.connect(url, function(err, db) {
//       if (err) throw err
//       var collection = db.collection(process.argv[3])
//       collection.remove({
//         _id: process.argv[4]
//       }, function(err) {
//         if (err) throw err
//         db.close()
//       })
//     })

// ────────────────────────────────────────────────────────────────────────────────
