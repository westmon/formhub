var crypto = require('crypto'),
algorithm = 'aes-256-ctr',
password = 'd6F3Efesdfghjklkjhgfdsdfghjkjhgfdsakjhq';

function encrypt(text){
var cipher = crypto.createCipher(algorithm,password)
var crypted = cipher.update(text,'utf8','hex')
crypted += cipher.final('hex');
return crypted;
}

function decrypt(text){
var decipher = crypto.createDecipher(algorithm,password)
var dec = decipher.update(text,'hex','utf8')
dec += decipher.final('utf8');
return dec;
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 38; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

module.exports = {
  encrypt: encrypt,
  decrypt: decrypt,
  makeid: makeid
}

