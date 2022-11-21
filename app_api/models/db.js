var mongoose = require('mongoose');
var dbURI = 'mongodb://127.0.0.1/mekanbul';
//var dbURI = "mongodb+srv://selay:selay00@mekanbul.o2z26f1.mongodb.net/mekanbul?retryWrites=true&w=majority";
require("./mekansema"); 


function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}

process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı!",function(){
        process.exit(0);
    })
})


mongoose.connect(dbURI);
mongoose.connection.on(
    'connected', function(){
        console.log(dbURI + " adresindeki veritabanına bağlanıldı!\n");
    });
    
mongoose.connection.on(
    'error', function(){
        console.log(dbURI + "Bağlantı hatası!\n");
    });
    
mongoose.connection.on(
    'disconnected', function(){
        console.log(dbURI + "Bağlantı koptu!\n");
    });