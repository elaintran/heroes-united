var db = require("../models");
// var passport = require("../config/passport");

module.exports = function (app) {

    // Get all users
    app.get("/api/users", (req, res) =>
        db.User.findAll({
            include: [db.Main]
        }).then((dbUser) =>
            res.json(dbUser)
        ));

    app.get("/api/users/:id", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Main]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.put("/api/users/:id", (req, res) => {
        console.log(req.user);
        db.User.update(req.body, {
            where: {
                id: req.user.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    //i want this route to update the main character of the user
    // app.get("/api/users/:id/main", (req, res) => {
    //     console.log(req.params);
    //     db.User.findOne({
    //         where: {
    //             id: req.params.id,
    //             main: req.params.Main
    //         }
    //     }).then(function (dbUser) {
    //         res.json(dbUser);
    //         console.log(dbUser);
    //     });
    // });

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
            mainFullPortrait: req.body.mainFullPortrait,
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

    app.get("/api/enemy", (req, res) =>
        db.Enemy.findAll({}).then((dbEnemy) =>
            res.json(dbEnemy)
        )
    );

    app.post("/api/enemy", (req, res) => {
        console.log(req.body);
        db.Enemy.create({
            enemyName: req.body.enemyName,
            enemyClass: req.body.enemyClass,
            enemyPortrait: req.body.enemyPortrait,
            enemyChibi: req.body.enemyChibi,
            enemyHp: req.body.enemyHp,
            enemyStr: req.body.enemyStr,
            enemyDef: req.body.enemyDef,
            enemySpd: req.body.enemySpd,
            colorDark: req.body.colorDark,
            colorLight: req.body.colorLight
        }).then((dbEnemy) => res.json(dbEnemy));
    });

    app.get("/api/chapter", (req, res) =>
        db.Chapter.findAll({}).then((dbChapter) =>
            res.json(dbChapter)
        )
    );

    app.post("/api/chapter", (req, res) => {
        console.log(req.body);
        db.Chapter.create({
            chapterName: req.body.chapterName,
            chapterSubtitle: req.body.chapterSubtitle,
            chapterDescription: req.body.chapterDescription,
            chapterImg: req.body.chapterImg,
            chapterComplete: req.body.chapterComplete
        }).then((dbChapter) => res.json(dbChapter));
    });
};
