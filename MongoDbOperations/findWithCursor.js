var mongoClient = require("mongodb").MongoClient;

function getData() {
    mongoClient.connect("mongodb://127.0.0.1:27017/LocationDb", function (err, client) {
        if (err) {
            console.log(err);
            return;
        }

        var db = client.db("LocationDb");
        var cursor = db.collection("check").find({});

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
    });
}

getData();