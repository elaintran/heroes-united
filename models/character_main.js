module.exports = function (sequelize, DataTypes) {
    var Main = sequelize.define("Main", {
        mainName: DataTypes.STRING,
        mainClass: DataTypes.STRING,
        mainPortrait: DataTypes.STRING,
        mainChibi: DataTypes.STRING,
        mainHp: DataTypes.INTEGER,
        mainStr: DataTypes.INTEGER,
        mainDef: DataTypes.INTEGER,
        mainSpd: DataTypes.INTEGER,
        colorDark: DataTypes.STRING,
        colorLight: DataTypes.STRING
    });
    return Main;
};