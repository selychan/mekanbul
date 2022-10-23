var express = require('express');
var router = express.Router();

const anaSayfa = function(req,res,next){
    res.render('anasayfa',  {
        "baslik":"Anasayfa",
        "sayfaBaslik": {
            "siteAd": "MekanBul",
            "slogan:": "Civardaki mekanları Keşfet!"
        },
        "mekanlar": [
            {
                "ad":"Starbucks",
                "adres":"Centrum Graen AVM",
                "puan":"4",
                "imkanlar": ["Düny Kahveleri","Kekler","Pastalar"],
                "mesafe": "10km"

            },

            {
                "ad":"Gloria Jean's",
                "adres":"Centrum Garden AVM",
                "puan":"3",
                "imkanlar": ["Kahve","çay","kek"],
                "mesafe": "1km"


            }
        ]
    }
    );
}
    


const mekanBilgisi = function(req,res,next){
     res.render('mekanbilgisi',
     
        {
            "baslik":"Mekan Bilgisi",
            "mekanBaslik":"Starbucks",
            "mekanDetay":{
                "ad":"Starbucks",
                "adres":"Centrum Garden",
                "puan":"4",
                "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
                "koordinatlar":{
                    "enlem":"37.7",
                    "boylam":"30.5"
                },
                
                "saatler":[
                    {
                        "gunler":"Paazartesi-Cuma",
                        "acilis":"9:00",
                        "kapanis":"23:00",
                        "kapali": false

                    },
                    {
                        "gunler":"Cumartesi-Pazar",
                        "acilis":"10:00",
                        "kapanis":"22:00",
                        "kapali": false
                    }
                ],   
                "yorumlar": [
                   {
                        "yorumYapan":"Selay Yurdagül",
                        "puan":"4",
                        "tarih":"23 Ekim 2022",
                        "yorumMetni":"Fena degil."
                    }
                ]
            }
        }); 
    }       

const yorumEkle = function(req,res,next){
    res.render('yorumekle', {title: 'Yorum ekle'});
}
module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}