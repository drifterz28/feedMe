'use strict';
var sqlite3 = require('sqlite3').verbose();


//db.serialize(function() {
//    db.run("CREATE TABLE IF NOT EXISTS Devices (Id INTEGER PRIMARY KEY autoincrement, Location TEXT, IP TEXT UNIQUE)");
//
//    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//    for (var i = 0; i < 10; i++) {
//        stmt.run("Ipsum " + i);
//    }
//    stmt.finalize();
//
//    db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//        console.log(row.id + ": " + row.info);
//    });
//});



module.exports = {
    db: function() {
        return new sqlite3.Database('feedMe.sqlite');
    },
    init: function() {
        this.createTables();
        console.log('init');
    },
    createTables: function() {
        var db = this.db();
        db.serialize(function() {
            db.run("CREATE TABLE IF NOT EXISTS categories (userId INTEGER, categoryName TEXT, categoryId INTEGER PRIMARY KEY autoincrement)");
            db.run("CREATE TABLE IF NOT EXISTS feeds (userId INTEGER, feedName TEXT, feedUrl TEXT, categoryId INTEGER)");
            db.run("CREATE TABLE IF NOT EXISTS saved (feedId INTEGER PRIMARY KEY autoincrement, userId INTEGER, articleName TEXT, articleUrl TEXT)");
            db.close();
        });
    },
    getCategories: function() {
        console.log('something');
    }
};
