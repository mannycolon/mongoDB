var mongo = require('mongodb').MongoClient
var age = process.argv[2]
var url = 'mongodb://localhost:27017/learnyoumongo'


mongo.connect(url, function (err, db){
    if (err) throw err
    var parrots = db.collection('parrots')
    parrots.find({
        age: {
            $gt: +age
        }
    }).toArray(function(err, documents){
        if (err) throw err
        console.log(documents)
        db.close() 
    })
})

// Learn MongoDB
// ───────────────
//  FIND
//  Exercise 3 of 9
// Here we will learn how to search for documents.
// In this exercise the database name is learnyoumongo.
// So, the url would be something like: mongodb://localhost:27017/learnyoumongo
// Use the parrots collection to find all documents where age
// is greater than the first argument passed to your script.
// Using console.log, print the documents to stdout.
// -------------------------------------------------------------------------------
// ## HINTS
// To connect to the database, one can use something like this:
//     var mongo = require('mongodb').MongoClient
//     mongo.connect(url, function(err, db) {
//       // db gives access to the database
//     })
// To get a collection, one can use db.collection('<collection name>').
// To find a document or documents, one needs to call find() on the collection.
// Find is a little bit different than what we are used to seeing.
// To access the arguments you can use the process.argv array of strings (the first argument is stored at the third position process.argv[2]). To convert to an integer, you could use parseInt()
// Here is an example:
//     collection.find({
//       name: 'foo'
//     }).toArray(function(err, documents) {
//     })
// If your program does not finish executing, you may have forgotten to
// close the db. That can be done by calling db.close() after you
// have finished.
// ## Resources:
//   * http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// » To print these instructions again, run: learnyoumongo print
// » To run your program, run: learnyoumongo run [solution.js]
// » To verify your program, run: learnyoumongo verify [solution.js]
// » For help run: learnyoumongo help