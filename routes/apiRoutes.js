<<<<<<< HEAD
var db = require("../models");
// var passport = require("../config/passport");

module.exports = function (app) {

    // Get all users
    app.get("/api/users", (req, res) =>
        db.User.findAll({}).then((dbUser) =>
            res.json(dbUser)
        ));

    app.get("/api/users/:id", (req, res) =>
        db.User.findOne({
            where: { id: req.params.id }
        }).then((dbUsers) => res.json(dbUsers))
    );

    app.get("/api/character", (req, res) =>
        db.Main.findAll({}).then((dbMain) =>
            res.json(dbMain)
        )
    );

    app.post("/api/character", (req, res) => {
        console.log(req.body);
        db.Main.create({
            mainName: req.body.mainName,
            mainClass: req.body.mainClass,
            mainPortrait: req.body.mainPortrait,
            mainChibi: req.body.mainChibi,
            mainHp: req.body.mainHp,
            mainStr: req.body.mainStr,
            mainDef: req.body.mainDef,
            mainSpd: req.body.mainSpd,
            colorDark: req.body.colorDark,
            colorLight: req.body.colorLight
        }).then(
            (dbMain) => res.json(dbMain));
    });

    // app.get("/api/login", (req, res) =>
    //     db.User.findOne({
    //         where: {
    //             userEmail: req.body.userEmail
    //         }
    //     }).then((dbUsers) =>
    //         (dbUsers.userPassword === req.body.userPassword) ?
    //             res.json(dbUsers) : res.send("not found")
    //     )
    // );

    // app.post("/api/register", (req, res) => {
    //     console.log(req.body);
    //     // use bcrypt to hash pw before sending to db
    //     db.User.create({
    //         userName: req.body.userName,
    //         userEmail: req.body.userEmail,
    //         userPassword: req.body.userPassword
    //         // logic if not unique then return a msg - flash
    //     }).then(
    //         // if(check if unique)
    //         (dbUser) => res.json(dbUser));
    // });
};
=======
var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
>>>>>>> origin
