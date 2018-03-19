var db = require("../models");

var auth = require("../auth/auth.js");

module.exports = function(app) {
// app.post("/api/form/registration", function(req, res){
//   db.Patform.create({
//     FirstName: req.body.FirstName,
//     MiddleName: req.body.MiddleName,
//     LastName: req.body.LastName,
//     emPhoneNum: req.body.emPhoneNum
//   }).then(function(Patform){
//     res.json(true);
//   }).catch(function(error){

//   });

// });
  app.post("/api/form/validation", function(req, res) {
    
    db.FormVals.findOne({
      where: {
        formRoute: req.cookies.formRoute,
        userID: req.cookies.id
      }
    }).then(function(response){
      if (response){
        response.update({
          value: JSON.stringify(req.body.patient)
        }).then(function(){
          res.end();
        })
      } else {
        db.FormVals.create({
          formRoute: req.cookies.formRoute,
          value: JSON.stringify(req.body.patient),
          userID: req.cookies.id
        })
        .then(function(){
          res.end();
        });
      }
    })


  });
  

  app.post("/api/form/registration", function(req, res){
    // console.log(req.cookies.id)
    //console.log((req.body));
    // console.log("Dick")
    db.FormVals.findOne({
      where: {
        formRoute: req.cookies.formRoute,
        userID: req.cookies.id
      }
    }).then(function(response){
      if (response){
        response.update({
          value: JSON.stringify(req.body.patient)
        }).then(function(){
          res.send(response);
        })
      } else {
        db.FormVals.create({
          formRoute: req.cookies.formRoute,
          value: JSON.stringify(req.body.patient),
          userID: req.cookies.id
        })
        .then(function(){
          res.send("hi");
        });
      }
    })


  });

  app.post("/api/form/history", function(req, res) {
    
    // console.log(JSON.stringify(req.body));
    db.FormVals.findOne({
      where: {
        formRoute: req.cookies.formRoute,
        userID: req.cookies.id
      }
    }).then(function(response){

      if (response){
        console.log(req.body.val)
        response.update({
          value: JSON.stringify(req.body.val)
        }).then(function(){
          res.send(response);
        })
      } else {
        db.FormVals.create({

          formRoute: req.cookies.formRoute,
          value: JSON.stringify(req.body.val),
          userID: req.cookies.id
        })
        .then(function(){
          console.log(req.cookies, req.body)
          res.send(response);
        });
      }
    })


  });

    app.post("/api/form/insurance", function(req, res) {

    db.FormVals.findOne({
      where: {
        formRoute: req.cookies.formRoute,
        userID: req.cookies.id
      }
    }).then(function(response){

      if (response){
        
        response.update({
          value: JSON.stringify(req.body.val)
        }).then(function(){
          res.send(response);
        })
      } else {
        db.FormVals.create({

          formRoute: req.cookies.formRoute,
          value: JSON.stringify(req.body.val),
          userID: req.cookies.id
        })
        .then(function(){
         
          res.send(response);
        });
      }
    })


  });

   app.post("/api/form/consent", function(req, res) {
  db.FormVals.findOne({
      where: {
        formRoute: req.cookies.formRoute,
        userID: req.cookies.id
      }
    }).then(function(response){

      if (response){

        response.update({
          value: JSON.stringify(req.body.val)
        }).then(function(){
          res.send(response);
        })
      } else {
        db.FormVals.create({

          formRoute: req.cookies.formRoute,
          value: JSON.stringify(req.body.val),
          userID: req.cookies.id
        })
        .then(function(){

          res.send(response);
        });
      }
    })


  });

    app.post("/api/form/emergency", function(req, res) {
   
    db.FormVals.findOne({
      where: {
        formRoute: req.cookies.formRoute,
        userID: req.cookies.id
      }
    }).then(function(response){

      if (response){
  
        response.update({
          value: JSON.stringify(req.body.val)
        }).then(function(){
          res.send(response);
        })
      } else {
        db.FormVals.create({

          formRoute: req.cookies.formRoute,
          value: JSON.stringify(req.body.val),
          userID: req.cookies.id
        })
        .then(function(){
          console.log(req.cookies, req.body)
          res.send(response);
        });
      }
    })


  });

  app.post("/api/user/new", function(req, res) {
    // console.log(req.body)
    // console.log(req.body.email.length)
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: auth.encrypt(req.body.password),
      designation: req.body.designation
    })
    .then(function(dbDoctor) {
     // res.json(true);
     if (dbDoctor){

     
      var token = auth.makeid();
        db.Users.update({
        token: token}, 
        {where: {
          id: dbDoctor.id
        }
      }).then(function(){
        res.json({token: token, id: dbDoctor.id, name: answer.name})
      })
    } else {
      res.json(false)
    }
    }).catch(function(error){
      
    });
  });


  app.post("/api/user/login", function(req, res) {
    db.Users.findOne({
      where: {
        username: req.body.username,
        password: auth.encrypt(req.body.password)
      }
    }).then(function(answer) {
      
      if (answer){ //if user and password matches
          var token = auth.makeid();
          db.Users.update({
          token: token}, 
          {where: {
            id: answer.id
          }
        }).then(function(){
          res.json({token: token, id: answer.id, name: answer.name})
        })
      } else {
        res.json(false);
      }
      
    }).catch(function(error){
      
    })
  });
  app.post("/api/patient/forms", function(req, res) {

    db.Users.update({
      formTofill: req.body.arrayForms},
      {where: {
        email: req.body.email
      }
    }).then(function(response){
      if (response){
        res.json(true)
      } else {
        res.json(false)
      }
    })
  })

  app.post("/api/doctos/client/autocomplete", function(req, res){
    
    db.Users.findAll({
      where: {
        designation: "Patient"
      }
    }).then(function(response){
      var emails = response.map(function(data){
        return data.email
      })
      res.json(emails)
    })
  })

  app.post("/mail/send", function(req, res){
    console.log(req.body.email, req.body.doctor)
    console.log("hi")
    var emailSender = require("../mail.js")({
      to: req.body.email,
      subject: 'FormHub [request]',
      message: '<h2>Welcome to FormHub!</h2><p>Please visit FormHub to complete the required forms for Dr. ' +  req.body.doctor
    })
    res.end();
  })

  app.post("/print/forms/add", function(req, res){
    console.log("hi")
    db.Print.create({
      userID: req.cookies.id,
      rand: makeid()
    }).then(function(x){
      res.json("/print/forms/" + x.userID + "/" + x.rand)
    })
  })

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 38; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
};

