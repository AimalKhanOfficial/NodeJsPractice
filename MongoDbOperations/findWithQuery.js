var mongoClient = require("mongodb").MongoClient;
var { promisify } = require("util");

var mongoConnection = promisify(mongoClient.connect);

function getData() {
    mongoConnection("mongodb://127.0.0.1:27017/LocationDb")
        .then(client => {

            var db = client.db("LocationDb");
            var cursor = db.collection("numberss").find({ price: { $gte: 4, $lte: 8 } });

            cursor.forEach(
                function (doc) {
                    console.log(doc);
                },
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("Done!");
                });
        })
        .catch(err => {
            console.log(err);
        });
}

getData();
