var mongoClient = require("mongodb").MongoClient;

function getData() {
    mongoClient.connect("mongodb://127.0.0.1:27017/LocationDb", function (err, client) {
        if (err) {
            console.log(err);
            return;
        }
        var db = client.db("LocationDb");
        db.collection("numberss").insert(
            {
                price: 100
            }, function (err, docInserted) {
                console.log(docInserted);
                console.log("Inserted");
            });
        client.close();
    });
}

getData();