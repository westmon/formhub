var path = require("path");
var db = require("../models");

module.exports = function(app) {

    app.get("/registration", function(req, res) {
        var token = req.cookies.token
        var username = req.cookies.username

        db.Users.findOne({
            where: {
                username: username,
                token: token
            }
        }).then(function(matched){
            
            if (matched) {
                res.redirect("/")
            } else {
                res.render("registration")
            }
            
        })
      });

    app.get("/api/form/registration", function(req, res) {
        res.render("form_ptregistration")
    });

      app.get("/login", function(req, res) {
        var token = req.cookies.token
        var username = req.cookies.username

        db.Users.findOne({
            where: {
                username: username,
                token: token
            }
        }).then(function(matched){
            
            if (matched) {
                res.redirect("/")
            } else {
                res.render("login")
            }
            
        }) 
      });
      app.get("/", function(req, res){
          console.log(req)
        var token = req.cookies.token
        var username = req.cookies.username
      

        db.Users.findOne({
            where: {
                username: username,
                token: token
            }
        }).then(function(matched){
            // console.log(matched)
            if (matched) {
                if (matched.designation === "Doctor"){
                    db.FormTemplates.findAll({

                    }).then(function(response){
                        formRoutes = response.map(function(element){
                            return {name: element.formName, id: element.id}
                        })

                        // console.log(formRoutes)
                        res.render("doctor", {name: matched.name, designation: matched.designation, forms: formRoutes})
                    })
                    


                } else if (matched.designation === "Patient"){

                    if (matched.formTofill) {
                        var forms = [];
                        var ids = matched.formTofill.split(",");
                        var routes = [1];
                 
                            db.FormTemplates.findAll({
                                where: {
                                    id: ids
                                }
                            }).then(function(result){
                                
                                if (result){
                                    // console.log(result[1].formRoute)
                                    var formRoutes = result.map(function(val){
                                        return {route: val.formRoute, name: val.formName}
                                    })
                                    // console.log(formRoutes)
                                    res.render("patient", {name: matched.name, designation: matched.designation, forms: formRoutes})
                                    // routes.push(result.formRoute)
                                }
                                
                            })
                    } else {
                        res.render("patient", {name: matched.name, designation: matched.designation, forms: null})
                    }

                    
                    // console.log(routes, "a")
                    
                }
                
            } else {
                res.render("login")
            }
            
        })
          
      })
      app.get("/logout", function(req, res){
        var token = req.cookies.token
        var username = req.cookies.username

        db.Users.update({
            token: null},
            {where: {
                username: username,
                token: token
            }
        }).then(function(matched){
            
           res.redirect("/login");
            
        })
          
      })

    app.get("/form/:forms?", function(req, res) {

    if (req.params.forms) {

      db.FormTemplates.findOne({
        where: {
          formRoute: req.params.forms
        }
      }).then(function(result) {

       
            res.render(result.formRoute, {layout: false});
            
      });
    }

    else  {
        res.json("Sorry dude.")}
    });  

    // app.get("/validation", function(req, res){
    //     res.render("validation", {layout: false})
    // })

    app.get("/placeholder", function(req,res){
        res.render("placeholder", {layout:false})
    })

    app.get("/print/forms/:id/:rand", function(req, res){
        // console.log("wtf")
        if (req.params.rand) {
            // console.log(req.params.rand)
            // res.json("hi")

            db.Print.findOne({
                where : {
                    userID: req.params.id,
                    rand: req.params.rand
                }
            }).then(function(response){
                db.FormVals.findAll({
                    where: {
                        userID: response.userID
                    }
                }).then(function(response2){

                    res.render("printForms", {res: response2}, {name, id: id})
                })
                
            })
        }
    });
};    