var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var age = process.argv[2]

mongo.connect(url, function (err, db){
    if (err) throw err
    var collection = db.collection('parrots')
    collection.count({
        age: {
            $gt: +age
        }
    }, function(err, count) {
        if (err) throw err
        console.log(count)
        db.close()
    })
})


// Learn MongoDB
// ───────────────
//  COUNT
//  Exercise 8 of 9

// Here we will learn how to count the number of documents that
// meet certain criteria.

// Use the parrots collection from the database named learnyoumongo to
// count all documents where age is greater than the first argument
// passed to your script.

// Using console.log, print the number to stdout.

// -------------------------------------------------------------------------------

// ## HINTS

// To count the number of documents meeting certain criteria,
// we must use the collection.count() function.

// Here is an example:

//     collection.count({
//       name: 'foo'
//     }, function(err, count) {
    
//     })

// If your program does not finish executing, you may have forgotten to
// close the db. That can be done by calling db.close() after you
// have finished.

// ## Resource

//   * http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#count


// » To print these instructions again, run: learnyoumongo print
// » To run your program, run: learnyoumongo run [solution.js]
// » To verify your program, run: learnyoumongo verify [solution.js]
// » For help run: learnyoumongo help